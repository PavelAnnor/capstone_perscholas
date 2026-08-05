import mongoose from "mongoose"

const mangaSubmissionSchema = mongoose.Schema({
  userId: {
    required: true,
  },
  mangaDexId: {
    required: true,
  },
  title: {},
  author: {},
  cover: {},
  description: {},
  volumes: {},
  chapters: {},
  lastRead: {},
  currentChapter: {},
  currentVolume: {},
});

const MangaSubmissionModel = mongoose.model("MangaSubmissionModel", mangaSubmissionSchema, "manga_submissions")
export default MangaSubmissionModel;