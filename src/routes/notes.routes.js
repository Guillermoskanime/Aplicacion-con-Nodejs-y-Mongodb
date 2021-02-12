const { Router } = require("express");
const router = Router();

// Controller
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require("../controllers/notes.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Note nota nueva
router.get("/notes/add",isAuthenticated, renderNoteForm);

router.post("/notes/new-note",isAuthenticated, createNewNote);

// Get All Notes obtener todas las notas 
router.get("/notes",isAuthenticated, renderNotes);

// Edit Notes editar notas 
router.get("/notes/edit/:id",isAuthenticated, renderEditForm);

router.put("/notes/edit/:id",isAuthenticated, updateNote);

// Delete Notes borrar las notas 
router.delete("/notes/delete/:id",isAuthenticated, deleteNote);

module.exports = router;