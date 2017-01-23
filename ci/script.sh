# This script takes care of testing your crate

set -ex

export RUST_BACKTRACE=1

# TODO This is the "test phase", tweak it as you see fit
main() {
    ./build.sh
    cross build --target $TARGET
    cross build --target $TARGET --release

    if [ ! -z $DISABLE_TESTS ]; then
        return
    fi

    cross test --target $TARGET
    cross test --target $TARGET --release

    cross run --target $TARGET
    cross run --target $TARGET --release
}

# we don't run the "test phase" when doing deploys
if [ -z $TRAVIS_TAG ]; then
    main
fi