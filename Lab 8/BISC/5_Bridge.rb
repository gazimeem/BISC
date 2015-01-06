#!/usr/bin/ruby -I/msf3/lib -Ilib/

require 'bisc'

bisc = BISC::Assembler.new(ARGV)

#
# EXERCISE: 
#
# Create a return-oriented payload stage that enables the execution of
# an embedded traditional machine code payload.  You may simply use a
# small string of "\xCC" as your traditional machine code payload for
# testing purposes.
#
# For example:
# -----
# hHeap = HeapCreate(HEAP_CREATE_ENABLE_EXECUTE, 0, 0);
# pfnPayload = HeapAlloc(hHeap, 0, dwPayloadLength);
# memcpy(pfnPayload, lpPayload, dwPayloadLength);
# (*pfnPayload);
# -----
# VirtualAlloc(lpAddress, dwPayloadSize, MEM_COMMIT,
#                                        PAGE_EXECUTE_READWRITE);
# memcpy(lpAddress, lpPayload, dwPayloadLength);
# (*lpAddress);
# -----
# lpAddress = VirtualAlloc(0, dwPayloadSize, MEM_COMMIT,
#                                        PAGE_EXECUTE_READWRITE);
# memcpy(lpAddress, lpPayload, dwPayloadLength);
# ----
# VirtualProtect(lpPayload & ~(4096 - 1), dwPayloadSize,
#                        PAGE_EXECUTE_READWRITE);
# (*lpPayload)();
# -----
#
