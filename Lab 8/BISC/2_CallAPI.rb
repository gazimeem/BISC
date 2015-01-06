#!/usr/bin/ruby -I/msf3/lib -Ilib/

require 'bisc'

#
# Create our BISC object, which will handle scanning for instruction
# sequences and managing scratch data space
#
bisc = BISC::Assembler.new(ARGV)

# EXERCISE:
#
# Create a return-oriented program to call a Win32 API function
# through the IAT with one or more constant-valued arguments.  Verify
# that the function returns correctly to the return-oriented program stream.
#
# For example:
# ----
#     Sleep(5000);
# ----
#    

ppfn = bisc.get_iat_pointer("KERNEL32.DLL", "Sleep")

Main = [
]

print bisc.assemble(Main)
