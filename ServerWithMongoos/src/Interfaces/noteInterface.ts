import { ObjectId } from 'mongodb';
import { Types } from 'mongoose';



export interface NoteInterface {
  title: string;
  content?: string; // optional because you have default: " "
  category?: "Personal" | "Professional" | "Student" | "Work"; // optional (default is "Personal")
  pinned?: boolean; // optional (default is false)
  tags: {
    label: string;
    color?: string; // optional because default is "grey"
  };
  user:Types.ObjectId;
  createdAt?: Date; // timestamps add this automatically
  updatedAt?: Date; // timestamps add this automatically
}
