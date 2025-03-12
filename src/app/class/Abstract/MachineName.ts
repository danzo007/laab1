import { Blender } from "./Blender";
import { Toaster } from "./Toaster";

export type MachineName = 'Toaster' | 'Blender';
export type MachineNameMap = {
    [key: string]: MachineName;
}

export const MachineNameMap: MachineNameMap = {
    Toaster: 'Toaster',
    Blender: 'Blender'
}