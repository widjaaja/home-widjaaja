import React, {useEffect, useState} from 'react';
import Ane50 from '../images/anee.jpg';
import Github from '../images/github.png';
import Gitlab from '../images/gitlab.png';
import Instagram from '../images/instagram.png';
import Linkedin from '../images/linkedin.png';
import Medium from '../images/medium.png';

function Desktop(props) {
    const { projects } = props;

    return (
        <>
        <div className="h-screen overflow-hidden bg-gray-300">
            <div className="flex h-full">
                <div className="w-18vw xl:w-22vw p-2 bg-white m-4 content-center rounded-lg h-98 shadow-xl border-4 border-black">
                    <div className="flex flex-col">
                    <div className="text-gray-700 text-center px-4 xl:px-2 py-4 xl:py-2 lg:py-2 mx-auto xl:my-1">
                        <img className="w-64 xl:w-48 lg:w-40 rounded-full border-3 border-black" src={Ane50}></img>
                    </div>
                    <div className="text-gray-700 text-2xl xl:text-xl lg:text-slg tracking-wide lg:tracking-normal font-medium font-sans px-3 mx-2 lg:px-2 lg:mx-0 my-2 xl:my-3 lg:my-2">Adjie Wijaya Kusuma 👨‍💻</div>
                    <div className="flex flex-col font-desc m-1">
                        <div className="text-gray-700 px-2 my-1 xl:my-0 lg:my-0 mx-2">📧 Email</div>
                        <div className="text-gray-700 text-lg xl:text-base lg:text-sm px-2 my-1 mx-2">Adjieevil@gmail.com</div>
                    </div>
                    <div className="flex flex-col font-desc m-1">
                        <div className="text-gray-700 px-2 my-1 xl:my-0 lg:my-0 mx-2">📍 Location</div>
                        <div className="text-gray-700 text-lg xl:text-base lg:text-sm px-2 my-1 mx-2">Jakarta, Indonesia</div>
                    </div>
                    <div className="flex flex-col font-desc">
                        <div className="text-gray-700 px-3 my-1 xl:my-0 lg:my-0 mx-2">📧 work</div>
                        <div className="text-gray-700 text-lg xl:text-base lg:text-sm px-3 my-1 mx-2">I'm working at a computer and scolded every day !! Kidding :)</div>
                    </div>
                    <div className="flex flex-col font-desc">
                        <div className="text-gray-700 px-3 mt-3 xl:mt-2 lg:mt-1 mx-2">📲 Find me in:</div>
                        <div className="flex flex-row mx-1 lg:px-1">
                        <a href='https://www.instagram.com/adjie214/' className="text-gray-700 text-center px-2 lg:px-1 py-1 ml-3 my-2">
                            <img className="xl:w-7 lg:w-6" src={Instagram}></img>
                        </a>
                        <a href='https://www.linkedin.com/in/adjie214/' className="text-gray-700 text-center px-2 lg:px-1 py-1 m-2">
                            <img className="xl:w-7 lg:w-6" src={Linkedin}></img>
                        </a>
                        <a href='https://medium.com/@Adjie214' className="text-gray-700 text-center py-1 m-2">
                            <img className="xl:w-7 lg:w-6" src={Medium}></img>
                        </a>
                        </div>
                    </div>
                    <div className="text-gray-700 lg:text-xsm text-center my-4 xl:my-3 font-semibold">👉🏻 See more about me 🌈</div>
                    </div> 
                </div>
                <div className="w-3/4 xl:w-4/5 lg:w-5/6 p-2 m-2 lg:mx-0 ">
                    <div className="flex flex-wrap">
                    {projects !== null ? projects.map(function(project, index){
                        var projectName = project.link.projectNamespace || project.link.org
                        console.log(project);
                        return <div className="w-1/2" key={ index }>
                            <div className=" text-gray-700 bg-white m-2 shadow-xl rounded-lg">
                                <div>
                                    <div className="flex justify-between px-2 pt-2">
                                        <div className="text-gray-700 text-center text-2xl lg:text-xl capitalize font-bold tracking-wide px-4 py-2 m-2">🗄️ {project.link.projectName || project.link.repo}</div>
                                        <div className="flex justify-start content-center flex-wrap">
                                            <div className="text-gray-700 text-sm lg:text-xs text-center bg-custom-1 font-condensed border-2 border-black font-extrabold uppercase rounded-md px-4 py-1 m-2">
                                                <a href={'https://' + project.targets.production.url}>Demo</a>
                                            </div>
                                            <div className="text-gray-700 text-sm lg:text-xs text-center bg-custom-2 font-condensed border-2 border-custom-3 font-extrabold uppercase rounded-md px-4 py-1 m-2">
                                                <a href={project.link.projectUrl || 'https://github.com/' + projectName  + '/' + project.name} >Visit</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-3">
                                        <div className="flex flex-row text-sm font-desc font-semibold mx-4 ">
                                            {project.tag.map(function(x, index){
                                            return <div className="text-gray-700 lg:text-sm text-center px-1">{x}</div>
                                            })} 
                                        </div>
                                        <div className="text-gray-700 text-lg px-5 lg:text-base font-medium font-desc py-2">{project.desc}</div>
                                        <hr className=" border-t-3 border-custom-4 mt-1"/>
                                        <div className="text-gray-700 px-3 py-1 mx-2 my-1">
                                            <img className="inline w-8 lg:w-5 mr-3" src={project.link.type === 'gitlab' ? Gitlab : Github}></img>
                                            <a href={project.link.projectUrl || 'https://github.com/' + projectName  + '/' + project.name} className="inline text-sm font-medium tracking-wide lg:text-xsm">{projectName + '/' + project.name}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }) : <div></div>}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Desktop;