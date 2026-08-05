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
    type: Number,
    default: 0,
  },
  chapters: {
    type: Number,
    default: 0,
  },
  lastRead: {
    type: String,
    default: "N/A",
  },
  currentChapter: {
    type: Number,
    default: 0,
  },
  currentVolume: {
    type: Number,
    default: 0,
  },
});

const MangaSubmissionModel = mongoose.model("MangaSubmissionModel", mangaSubmissionSchema, "manga_submissions")
export default MangaSubmissionModel;