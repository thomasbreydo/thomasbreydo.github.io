#!/usr/bin/env zsh

# Without --incremental, this ensures all pages are rebuilt

rbenv local 2.7.2
bundle install
bundle exec jekyll build
