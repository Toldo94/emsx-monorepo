import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name?: string;
  email: string;
  password: string;
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
  roleName?: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: false,
    },
    roleName: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Create and export Mongoose Model
const AuthUser = mongoose.models?.User || mongoose.model<IUser>('User', UserSchema);
export default AuthUser;
