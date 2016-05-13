#![cfg_attr(feature = "lints", allow(unstable_features))]
#![cfg_attr(feature = "lints", feature(plugin))]
#![cfg_attr(feature = "lints", plugin(clippy))]

#![cfg_attr(feature = "nightly", feature(alloc_system))]

#[feature(deprecated)]

#[cfg(feature = "nightly")]
extern crate alloc_system;
extern crate chrono;
extern crate term; // TODO consolidate term, ansi_term and terminal_size
extern crate terminal_size;
extern crate open;

extern crate env_logger;
#[macro_use] extern crate log;
#[macro_use] extern crate clap;
#[macro_use] extern crate prettytable;

extern crate asciii;

use std::env;

use log::{LogRecord, LogLevelFilter};
use env_logger::LogBuilder;

mod cli;
use cli::subcommands;

fn setup_log(){
    let format = |record: &LogRecord| {
        format!("{level}:  {args}",
        level = record.level(),
        args  = record.args())
    };

    let mut builder = LogBuilder::new();
    builder.format(format).filter(None, LogLevelFilter::Info);

    let log_var ="ASCIII_LOG";
    if env::var(log_var).is_ok() {
       builder.parse(&env::var(log_var).unwrap());
    }

    builder.init().unwrap();
}

fn setup_app(){
    trace!("setting up app");

    let matches = cli::setup();

    match matches.subcommand() {
     ("list",      Some(sub_m)) => subcommands::list(sub_m),
     ("csv",       Some(sub_m)) => subcommands::csv(sub_m),
     ("new",       Some(sub_m)) => subcommands::new(sub_m),
     ("edit",      Some(sub_m)) => subcommands::edit(sub_m),
     ("show",      Some(sub_m)) => subcommands::show(sub_m),
     ("archive",   Some(sub_m)) => subcommands::archive(sub_m),
     ("unarchive", Some(sub_m)) => subcommands::unarchive(sub_m),
     ("config",    Some(sub_m)) => subcommands::config(sub_m),
     ("whoami",    _          ) => subcommands::config_show("manager_name"),

     ("path",      Some(sub_m)) => subcommands::show_path(sub_m),
     ("open",      Some(sub_m)) => subcommands::open_path(sub_m),

     //("make",      Some(sub_m)) => subcommands::make_project(sub_m),

     ("term",      _          ) => subcommands::term(),
     ("doc",       _          ) => subcommands::doc(),
     ("version",   _          ) => subcommands::version(),

     ("remote",    _          ) => subcommands::git_remote(),
     ("pull",      _          ) => subcommands::git_pull(),
     ("diff",      _          ) => subcommands::git_diff(),
     ("status",    _          ) => subcommands::git_status(),
     ("add",       Some(sub_m)) => subcommands::git_add(sub_m),
     ("commit",    _          ) => subcommands::git_commit(),
     ("push",      _          ) => subcommands::git_push(),
     ("log",       _          ) => subcommands::git_log(),
     _                       => ()
    }
}

fn main(){
    setup_log();
    setup_app();
}

