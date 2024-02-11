import mongoose, { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt zorunludur'],
  },
  tag: {
    type: String,
    required: [true, 'Tag zorunludur'],
  },
});

export const Prompt = models.Prompt || model('Prompt', PromptSchema);
