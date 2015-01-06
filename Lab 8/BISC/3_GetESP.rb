#!/usr/bin/ruby -I/msf3/lib -Ilib/

require 'bisc'

#
# Create our BISC object, which will handle scanning for instruction
# sequences and managing scratch data space
#
bisc = BISC::Assembler.new(ARGV)

#
# Allocate storage for any variables used
#
lpMainESP = bisc.allocate(4)

#
# EXERCISE: Create a return-oriented program to get and store the
# value of ESP such that *(lpMainESP) is the value of ESP when Main
# begins executing.
#
GetESP = [
]

#
# At this breakpoint, ESP should be equal to *(pESP) + 4
#
# i.e.: .printf "%.8x =? %.8x", poi(pESP) + 4, esp
#
Main = [
  "INT3"
]

print bisc.assemble(GetESP + Main)

