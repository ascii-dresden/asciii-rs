//! Thank you for choosing `asciii`, the new and improved `ascii`.
//!
//!

// #![feature(external_doc)]
// #![doc(include = "../manual.md")]

#![warn(//missing_docs,
        //missing_copy_implementations,
        //missing_debug_implementations,
        unstable_features,
        unused_import_braces,
        )]

#![recursion_limit = "1024"]
#![deny( trivial_casts, trivial_numeric_casts,)]

#![warn( unused_import_braces, unused_qualifications)]

#![allow(unknown_lints, needless_borrow, useless_format)]

#![cfg_attr(feature = "lints", allow(unstable_features))]
#![cfg_attr(feature = "lints", feature(plugin))]
#![cfg_attr(feature = "lints", plugin(clippy))]
//#![cfg_attr(feature = "lints", plugin(herbie_lint))]

//#![feature(alloc_system)]
//extern crate alloc_system;

extern crate yaml_rust;
extern crate chrono;
extern crate regex;
extern crate slug;
extern crate tempdir;
extern crate term;
extern crate bill;
extern crate open;
extern crate toml;
extern crate semver;
extern crate term_size;
extern crate icalendar;


#[cfg(feature="serde")] extern crate serde;
#[cfg(feature="serde")] #[macro_use] extern crate serde_derive;

#[cfg(feature="serialization")] extern crate serde_json;
#[cfg(feature="deserialization")] extern crate serde_yaml;
#[cfg(feature="deserialization")] extern crate ordered_float;
#[cfg(feature="deserialization")] extern crate num_traits;
#[cfg(feature="server")] extern crate rocket;

#[macro_use] extern crate error_chain;
#[macro_use] extern crate log;
#[macro_use] extern crate prettytable;
#[macro_use] extern crate lazy_static;
#[macro_use] extern crate maplit;
#[macro_use] extern crate custom_derive;
#[macro_use] extern crate enum_derive;
extern crate rayon;
extern crate linked_hash_map;

extern crate crowbook_intl_runtime;
/// Autogenerated localization macros kudos to [crowbook-intl](https://crates.io/crates/crowbook-intl).
#[macro_use] pub mod localize_macros;

#[cfg(feature="git_statuses")] extern crate git2;

extern crate env_logger; // TODO featuregate logging in libasciii

#[macro_use]
pub mod util;
pub mod config;

pub mod project;
pub mod storage;
pub mod print;
pub mod actions;

pub mod templater;

#[cfg(feature="document_export")] extern crate handlebars;
#[cfg(feature="document_export")] pub mod document_export;

pub use yaml_rust::Yaml;

// TODO keep this up to date after move
pub static DOCUMENTATION_URL: &'static str  = "https://docs.rs/asciii/";

/// Contains a list of enabled features
pub static ENABLED_FEATURES: &'static str = concat!(
    r#"{ "enabled_features": {"#,
    r#"   "document_export": "#, cfg!(feature = "document_export"), ",\n",
    r#"   "shell":           "#, cfg!(feature = "shell"), ",\n",
    r#"   "server":          "#, cfg!(feature = "server"), ",\n",
    r#"   "version_string":  "#, cfg!(feature = "version_string"), ",\n",
    r#"   "localization":    "#, cfg!(feature = "localization"), ",\n",
    r#"   "git_statuses":    "#, cfg!(feature = "git_statuses"), ",\n",
    r#"   "serialization":   "#, cfg!(feature = "serialization"), ",\n",
    r#"   "deserialization": "#, cfg!(feature = "deserialization"), ",\n",
    r#"   "cli":             "#, cfg!(feature = "cli"), ",\n",
    r#"   "meta_store":      "#, cfg!(feature = "meta_store"), "\n",
    "},",
    r#""version": ""#, env!("CARGO_PKG_VERSION"), r#"""#,
    "}"
    );

lazy_static!{
    /// Static `ConfigReader` to be able to access the configuration from everywhere.
    pub static ref CONFIG: config::ConfigReader = config::ConfigReader::new().unwrap();

    /// Hint for app to point at `asciii::DOCUMENTATION_URL`
    pub static ref DOCHINT: String = lformat!("Documentation at: {}", DOCUMENTATION_URL);
}

#[cfg(not(feature="version_string"))]
lazy_static!{
    /// Human readable, no semantic versioning.
    pub static ref VERSION: &'static str = env!("CARGO_PKG_VERSION");
}

#[cfg(feature="version_string")]
lazy_static!{
    /// Human readable, no semantic versioning.
    pub static ref VERSION: String = format!("{} - {} ({}, {})",
                                             env!("CARGO_PKG_VERSION"),
                                             include_str!("../.most_recent_commit"),
                                             env!("BUILD_DATE"),
                                             env!("PROFILE"),
                                             );
}

#[derive(Debug, Copy, Clone)]
pub enum BillType{
    Offer,
    Invoice
}

impl ToString for BillType{
    fn to_string(&self) -> String {
        match *self{
            BillType::Offer => "Offer",
            BillType::Invoice => "Invoice"
        }.to_owned()
    }
}
