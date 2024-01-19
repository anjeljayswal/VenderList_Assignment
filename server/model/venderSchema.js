import mongoose from 'mongoose';

const venderSchema = mongoose.Schema(
  {
    vname:{
        type:String,
        required:true,
    },
    accountNumber:{
        type: Number,
      required: true,
    },
    bname:{
        type:String,
        required:true,
    },
    addresLine1:{
        type:String,
        required:true,
    },
    addresLine2:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    zipcode:{
        type:String,
        required:true,
    },    
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('vender', venderSchema);
