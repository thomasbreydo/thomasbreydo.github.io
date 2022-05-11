#!/usr/bin/env fish

chruby ruby-2.7.2
bundle install
bundle exec jekyll serve
