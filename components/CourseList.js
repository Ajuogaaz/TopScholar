import React,{ useState} from 'react';
import { ScrollView, View, StyleSheet } from 'react-native'
import Course from './Course'
import TermSelector from './TermSelector'
import CourseSelector from  './CourseSelector'
import {  getCourseTerm,  terms }from '../utils/course'

const CourseList = ({ courses, view }) => {

    const [selectedTerm, setSelectedTerm ] = useState('Winter');

    const termCourses  = courses.filter(course => selectedTerm === getCourseTerm(course))


    return (
            
        <ScrollView>
            <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <CourseSelector courses={termCourses} view={view}/>
        </ScrollView>
  )};



export default CourseList;