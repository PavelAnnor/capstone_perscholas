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
  year: {
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
    type: Date,
    default: Date.now,
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

//helps with read opperations 
mangaSubmissionSchema.index({ userId: 1, mangaDexId: 1 }, { unique: true });


const MangaSubmissionModel = mongoose.model("MangaSubmissionModel", mangaSubmissionSchema, "manga_submissions")
export default MangaSubmissionModel;

