import mongoose from 'mongoose'


// Define the schema for Affiliation fields
const affiliationSchema = new mongoose.Schema({
    id: Number,
    value: String,
  });
  
  // Define the schema for Entrance fields
  const entranceSchema = new mongoose.Schema({
    id: Number,
    value: String,
  });
  
  // Define the schema for Document fields
  const documentSchema = new mongoose.Schema({
    id: Number,
    value: String,
  });
  
  // Define the schema for Specialization fields
  const specializationSchema = new mongoose.Schema({
    id: Number,
    value: String,
  });
  
  // Define the main schema for the model
  const courseSchema = new mongoose.Schema({
    additionalInfoSelectField: String,
    servicesSelectField: String,
    affiliationFields: [affiliationSchema],
    entranceFields: [entranceSchema],
    documentFields: [documentSchema],
    specializationFields: [specializationSchema],
    intakeSelectField: String,
    durationFields: [{ id: Number, value: String }],
    courseTagSelectField: String,
    descriptionFields: String,
    courseTagDescription: String,
  });

// Create the Mongoose model based on the schema
const CourseModel = mongoose.model('Course', courseSchema);


export default CourseModel