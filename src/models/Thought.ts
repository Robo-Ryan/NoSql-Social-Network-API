import { Schema, model } from 'mongoose';
import User from './User.js';

interface IThought {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: [];
}

// Schema to create thought model
const thoughtSchema = new Schema<IThought>
(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    // reactions should be an array of nested documents created with the reaction Schema
    // the reaction schema is a schema only and not a model. it can be found in the models folder
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reaction',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// write a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function (this: any) {
  return this.reactions.length;
});
// create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

export default Thought;
