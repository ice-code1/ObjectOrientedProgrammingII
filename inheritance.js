// creating parent and child classes for our e-learning system
class user {
    constructor (userID, name, password,email){
        this.userID = userID
        this.name = name
        this.password = password
        this.email = email
    }

    setName(name){
        return this.name = name
    }
}

class VirtualLearningHub extends user {
    constructor (hubID,courseNo,instructorsNo){
        this.hubID = hubID
        this.courseNo = courseNo
        this.instructorsNo = instructorNo 
    }

}

class Instructor extends user  {
    constructor(InstructorID,courseTaught){
        this.InstructorID = InstructorID
        this.courseTaught = courseTaught
    }

}

class student extends user{
    constructor(studentID,enrolledCourse){
        this.studendID = studentID
        this.enrolledCourse = enrolledCourse
    }     

}

class Enrollment extends user{
    constructor(enrollmentID,enrollmentDate,grade){
        this.enrollmentID = enrollmentID
        this.enrollmentDate = enrollmentDate
        this.grade = grade
    }
}

class Courses {
    constructor(courseID,courseInstructor,courseTitle,courseDescription){
        this.courseID = courseID
        this.courseInstructor = courseInstructor
        this.courseTitle = courseTitle
        this.courseDescription = courseDescription
    }
}

class Resources extends Courses{
    constructor(resourceID,resourceDescription){
        this.resourceID = resourceID
        this.resourceDescription = resourceDescription
    }

}

class Lessons extends Courses{
    constructor(LessonID,LessonTitle,LessonContent){
        this.LessonID = LessonID
        this.LessonTitle = LessonTitle
        this.LessonContent = LessonContent 
    }
}

class Video extends Courses{
    constructor(videoID,videoDuration){
        this.videoID = videoID
        this.videoDuration = videoDuration
    }
}

class Quiz extends Courses{
    constructor(quizID,quizTitle,quizDescription){
        this.quizID = quizID
        this.quizTitle = quizTitle
        this.quizDescription = quizDescription
    }
}

function main(){
    
}