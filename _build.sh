#!/usr/bin/env zsh

rbenv local 2.7.2
bundle install
bundle exec jekyll build
