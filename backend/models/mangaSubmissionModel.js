import mongoose from "mongoose"

const mangaSubmissionSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  mangaDexId: {
    type: String,
    required: true,
  },
  year:{
    type: mongoose.Schema.Types.Mixed,
    default: "N/A",
  },
  title: {
    type: String,
    default: "N/A",
  },
  author: {
    type: String,
    default: "N/A",
  },
  cover: {
    type: String,
    default: "N/A",
  },
  description: {
    type: String,
    default: "N/A",
  },
  volumes: {
    type: mongoose.Schema.Types.Mixed,
    default: "N/A",
  },
  chapters: {
    type: mongoose.Schema.Types.Mixed,
    default: "N/A",
  },
  lastRead: {
    type: String,
    default: "N/A",
  },
  currentChapter: {
    type: mongoose.Schema.Types.Mixed,
    default: "N/A",
  },
  currentVolume: {
    type: mongoose.Schema.Types.Mixed,
    default: "N/A",
  },
});

const MangaSubmissionModel = mongoose.model("MangaSubmissionModel", mangaSubmissionSchema, "manga_submissions")
export default MangaSubmissionModel;