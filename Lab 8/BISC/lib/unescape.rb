#!/usr/bin/ruby -I/msf3/lib

require 'rex/arch'
require 'rex/text'

puts Rex::Text.to_unescape(File.open(ARGV[0]. "rb").read())
