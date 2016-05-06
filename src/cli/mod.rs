//! Hooks for the commandline interface
//!
//! # Note to self
//! Put as little logic in here as possible.
//! That makes it easier to derive a pure library version later.

use std::process::exit;
use std::fmt::Display;
use project::Project;
use storage::*;
use util;
use ::CONFIG;

/// Contains concrete implementation of each subcommand
pub mod app;
pub mod subcommands;
pub mod print;

pub use self::app::setup;

/// prints a message and exist with code 1
pub fn fail<T:Display>(message:T) -> !{
    println!("{}", message);
    exit(1);
}

/// Execute a command returning a `StorageError`
/// TODO make this a `try!` like macro
fn execute<F, S>(command:F) -> S where F: FnOnce() -> StorageResult<S> {
    match command(){
        Ok(s) => s,
        Err(lerr) => { println!("ERROR: {}", lerr); exit(1) }
    }
}

/// Sets up an instance of `Storage`.
fn setup_luigi() -> Storage<Project> {
    let working = CONFIG.get_str("dirs/working")
                .expect("Faulty config: dirs/working does not contain a value");
    let archive = CONFIG.get_str("dirs/archive")
                .expect("Faulty config: dirs/archive does not contain a value");
    let templates = CONFIG.get_str("dirs/templates")
                .expect("Faulty config: dirs/templates does not contain a value");
    execute(|| Storage::new(util::get_storage_path(), working, archive, templates))
}

/// Sets up an instance of `Storage`, with git turned on.
fn setup_luigi_with_git() -> Storage<Project> {
    let working = CONFIG.get_str("dirs/working")
                .expect("Faulty config: dirs/working does not contain a value");
    let archive = CONFIG.get_str("dirs/archive")
                .expect("Faulty config: dirs/archive does not contain a value");
    let templates = CONFIG.get_str("dirs/templates")
                .expect("Faulty config: dirs/templates does not contain a value");
    execute(||Storage::new_with_git(util::get_storage_path(), working, archive, templates))
}


/// Configuration for this list output.
#[derive(Debug)]
pub struct ListConfig<'a>{
    mode:         ListMode,
    show_errors:  bool,
    git_status:   bool,
    sort_by:      &'a str,
    filter_by:    Option<Vec<&'a str>>,
    use_colors:   bool,
    details:      Option<Vec<&'a str>>,
}

#[derive(Debug, PartialEq)]
pub enum ListMode{ Simple, Verbose, Nothing, Paths, Csv }

impl<'a> Default for ListConfig<'a>{
    fn default() -> ListConfig<'a>{
        ListConfig{
            mode:         if CONFIG.get_bool("list/verbose"){ ListMode::Verbose }
                          else{ ListMode::Simple },
            git_status:   CONFIG.get_bool("list/gitstatus"),
            show_errors:  false,
            sort_by:      CONFIG.get_str("list/sort")
                .expect("Faulty config: list/sort does not contain a value"),
            filter_by:    None,
            use_colors:   CONFIG.get_bool("list/colors"),
            details:      None,
        }
    }
}

fn sort_by(projects:&mut Vec<Project>, option:&str){
    match option {
        "manager" => projects.sort_by(|pa,pb| pa.manager().cmp( &pb.manager())),
        "date"    => projects.sort_by(|pa,pb| pa.date().cmp( &pb.date())),
        "name"    => projects.sort_by(|pa,pb| pa.name().cmp( &pb.name())),
        "index"   => projects.sort_by(|pa,pb| pa.index().unwrap_or("zzzz".to_owned()).cmp( &pb.index().unwrap_or("zzzz".to_owned()))), // TODO rename to ident
        _         => projects.sort_by(|pa,pb| pa.index().unwrap_or("zzzz".to_owned()).cmp( &pb.index().unwrap_or("zzzz".to_owned()))),
    }
}

pub mod validators{
    pub fn is_dmy(val: String) -> Result<(),String>{
        match ::util::yaml::parse_dmy_date(&val){
            Some(_) => Ok(()),
            None => Err(String::from("Date Format must be DD.MM.YYYY")),
        }
    }
}
