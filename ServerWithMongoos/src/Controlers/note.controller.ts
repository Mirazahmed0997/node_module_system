import express, { Request, Response } from 'express'
import { Note } from '../models/note.models';



export const notesRoutes= express.Router()





notesRoutes.post('/create-note',async(req: Request,res:Response)=>
{

  const body =req.body;

  const myNote= await Note.create(body)

  await myNote.save()

  res.status(201).json({
    success: true,
    message: "Note created Successfully Created",
    note: myNote
  })
})

notesRoutes.get('/',  async (req: Request, res: Response) => {


  const myNotes= await Note.find()


  res.status(201).json({
    success: true,
    message: "All notes",
    notes: myNotes
  })
});

notesRoutes.get('/:id',  async (req: Request, res: Response) => {

  const param =req.params.id
  // const myNotes = await Note.findById(param);
  const myNotes = await Note.findOne({_id: param});


  res.status(201).json({
    success: true,
    message: "Note created Successfully Created",
    notes: myNotes
  })
});

notesRoutes.patch('/updateNote/:id',  async (req: Request, res: Response) => {

  const param =req.params.id
  const updatedBody= req.body;
  const upadatedNote = await Note.findByIdAndUpdate(param,updatedBody,{new:true});
  // const upadatedNote = await Note.updateOne({_id:param},updatedBody,{new:true});


  res.status(201).json({
    success: true,
    message: "Note updated Successfully Created",
    upadatedNote
  })
});

notesRoutes.delete('/deleteNote/:id', async (req: Request, res: Response) => {
  try {
    const param = req.params.id;

    // Delete the note by ID
    const deletedNote = await Note.findByIdAndDelete(param);

    if (!deletedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      deletedNote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the note",
      error: error instanceof Error ? error.message : error,
    });
  }
});