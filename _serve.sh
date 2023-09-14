#!/usr/bin/env zsh

chruby ruby-2.7.2
bundle install
bundle exec jekyll serve
