import {v4 as uuidv4} from "uuid"

export const projects = [
    {
        id:uuidv4(), 
        title: 'LearnML', 
        desc: 'An educative platform that introduces its users to Classification, Clustering and Regression.', 
        github:  'https://github.com/waliamehak/LearnML',
        image:'./images/project1.jpg'
    },
    {
        id:uuidv4(), 
        title: 'Startle', 
        desc: 'An Android application that pranks other users. A pop-up of a scary image appears along with a sound whenever a user clicks on the screen.', 
        github:  'https://github.com/waliamehak/finalAPP_CS855',
        image:'./images/project2.jpg'
    },
    {
        id:uuidv4(), 
        title: 'Sorting Visaliser', 
        desc: 'A website that visualizes the mechanics behind Merge sort, Bubble sort, Quick sort & Insertion sort.', 
        github:  'https://github.com/waliamehak/SortingVisualiser',
        image:'./images/project3.png'
    },
    {
        id:uuidv4(), 
        title: 'Candy Analysis', 
        desc: 'A Jupyter notebook that creates a logistic regression model to look at the ingredients of a candy and then determines its likability.', 
        github:  'https://github.com/waliamehak/predictiveAnalysisOfCandies',
        image:'./images/project5.jpg'
    },
    {
        id:uuidv4(), 
        title: 'Ray Tracer', 
        desc: 'C++ based code that renders spheres by ray-tracing and uses OpenMP for parallel execution.', 
        github:  'https://github.com/waliamehak/Ray-Tracer',
        image:'./images/project6.png'
    }
    
]
