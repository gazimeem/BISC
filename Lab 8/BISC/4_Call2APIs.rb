#!/usr/bin/ruby -I/msf3/lib -Ilib/

require 'bisc'

bisc = BISC::Assembler.new(ARGV)

#
# EXERCISE: 
#
# Create a return-oriented program to call a Win32 function through
# the IAT, save the return value, and use the returned value in a second
# Win32 API function call.  Hint: You will need to use your GetESP from #3.
#
# For example:
# ----
#     hMem = GlobalAlloc(0, 42);
#     GlobalFree(hMem);
# ----
#     ptr = malloc(42);
#     free(ptr);
# ----
#
