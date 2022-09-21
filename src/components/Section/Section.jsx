import React from 'react'
import './Section.css'

import CHINESE1 from '../../assets/chinese1.jpg'
import CHINESE2 from '../../assets/chinese2.jpg'
import CHINESE3 from '../../assets/chinese3.jpg'

import JAPANESE1 from '../../assets/japanese1.jpg'
import JAPANESE2 from '../../assets/japanese2.jpg'
import JAPANESE3 from '../../assets/japanese3.jpg'

import AMERICAN1 from '../../assets/american1.jpg'
import AMERICAN2 from '../../assets/american2.jpg'
import AMERICAN3 from '../../assets/american3.jpg'

// const textdict1={
//   key:1,
//   titlename:"Chinese Section",
//   intro:['test',"My name is zyc","My name is zyc","My name is zyc"],
//   imgsrc:[CHINESE1, CHINESE2, CHINESE3, CHINESE4],
// }
// const textdict2={
//   key:2,
//   titlename:"Japanese Section",
//   intro:["My name is zyc","My name is zyc"],
//   imgsrc:[JAPANESE1, JAPANESE2],
// }
// const textdict3={
//   key:3,
//   titlename:"American Section",
//   intro:["My name is zyc","My name is zyc","My name is zyc"],
//   imgsrc:[AMERICAN1, AMERICAN2, AMERICAN3],
// }

// class Section_square extends React.Component{
//   constructor(props) {
//     super(props);
//     //this.context=props.text;
//     this.imgsrc=props.src;
//     this.context=props.text;
//     // console.log(typeof this.context)
//   } 
//   //标签内直接写文本是文本，用{}则是jsp表达式;\{ 表示转义的{
//   render(){
//     var context = ""+this.context;
//     return(
//       <div className='section__square'>
//         <img className='section__image' src={this.imgsrc}></img>
//         <span> {this.props.text} </span> 
//      </div>
//     )
//   }
// }

// class Section_area extends React.Component{

//   // 允许传入参数进行设置，而不是静态的;通过传参数设置classname
//   constructor(props) {
//     super(props);
//     this.key=props.key;
//     this.textdict=props.dict;
//     this.className=props.className;
//     this.expertlist= this.textdict.imgsrc.map((content, idx)=>{
//       return(<Section_square text={content} src={this.textdict.imgsrc[idx]}  /> )
//       // 千万不要忘记写return,否则其实并没有把内容加到返回的list中
//     });
//   } 
//   render(){
//     return(
//       <div className={this.className}> 
//       <span className='section__title'> {this.textdict.titlename} </span>
//       <div className='section__grid'>
//         {this.expertlist}
//       </div>
//     </div>
//     )
//   }
// }

// class Container extends React.Component{

//   render(){
//     return (
//       <div className='section__container'>
//         <Section_area className='section_area1' dict={textdict1} />
//         <Section_area className='section_area2' dict={textdict2} />
//         <Section_area className='section_area3' dict={textdict3} />
//       </div>
//     )
//   }
// }
//
//
//export default Container

import { useTranslation } from "react-i18next";

const Container = () => {
  const { t } = useTranslation();
  return (
    <div className='section__container'>
      <div className='section__area1'>
        <span className='section__title'> {t('p1.section1')} </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={CHINESE1} alt=''></img>
            <p> {t('p1.name1')} <br /><br /> {t('p1.info1')} </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={CHINESE2} alt=''></img>
            <p> {t('p1.name2')} <br /><br /> {t('p1.info2')} </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={CHINESE3} alt=''></img>
            <p> {t('p1.name3')} <br /><br /> {t('p1.info3')} </p>
          </div>
        </div>
      </div>

      <div className='section__area2'>
        <span className='section__title'> {t('p1.section2')} </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={JAPANESE1} alt=''></img>
            <p> {t('p1.name4')} <br /><br /> {t('p1.info4')} </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={JAPANESE2} alt=''></img>
            <p> {t('p1.name5')} <br /><br /> {t('p1.info5')} </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={JAPANESE3} alt=''></img>
            <p> {t('p1.name6')} <br /><br /> {t('p1.info6')} </p>
          </div>
        </div>
      </div>

      <div className='section__area3'>
        <span className='section__title'> {t('p1.section3')} </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={AMERICAN1} alt=''></img>
            <p> {t('p1.name7')} <br /><br /> {t('p1.info7')} </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={AMERICAN2} alt=''></img>
            <p> {t('p1.name8')} <br /><br /> {t('p1.info8')} </p>          
          </div>
          <div className='section__square'>
            <img className='section__image' src={AMERICAN3} alt=''></img>
            <p> {t('p1.name9')} <br /><br /> {t('p1.info9')} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container