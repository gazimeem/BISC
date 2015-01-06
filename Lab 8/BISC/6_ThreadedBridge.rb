#!/usr/bin/ruby -I/msf3/lib -Ilib/

require 'bisc'

bisc = BISC::Assembler.new(ARGV)

#
# EXERCISE: 
#
# Create a return-oriented payload stage to copy three embedded
# traditional machine code payloads into executable memory, execute the
# first one, and then create a new thread to execute the second one,
# and then execute the third one. The first payload is the repair payload
# that will repair the heap or any other corrupted memory if necessary.
# The second payload (run in a new thread) will be the actual payload 
# of the exploit (i.e. launch a calc).  The third payload is the
# continuation payload that restores state and resumes execution at
# the appropriate place.  For now, the repair payload should be a small 
# code fragment that writes a "flag" value to a global writable memory 
# address and the second payload can be a debug interrupt or an infinite
# loop (\xeb\xfe).
#
