import './App.css'
import { Content } from './Components'
import { useAppContext } from './Context'

import { BiLogoGmail, BiLogoGithub } from 'react-icons/bi'

function App() {
  const [{ show, data }, dispatch] = useAppContext()
  return (
    <div className='App'>
      <div className='profile'>
        <div className='profile_image'>
          <img src='/4.jpg' alt='' />
        </div>

        <div className='profile_info'>
          <h1> Hi!, I'm Sabri charime , i'm web developer frontend </h1>
        </div>
      </div>

      <div className='list'>
        <div className='items'>
          <div
            className='list_title'
            onClick={() => {
              dispatch({
                type: 'about',
                about: {
                  title: 'About Me ',
                  subtitle: "Hi I'm sabri charime,i'm a frontend Developer ",

                  description:
                    "hello and welcome to me about section,  i'm sabri charim and i'm frontend using  (HTML/CSS, JAVASCRIPT, REACT, NODEJS ), and this is my awesome page  ",

                  img: '/mern.png',
                },
                show: true,
              })
            }}
          >
            <h1>About Me </h1>
          </div>
        </div>
        <div className='items'>
          <div
            className='list_title'
            onClick={() => {
              dispatch({
                type: 'skills',
                skills: {
                  title: 'My Skills  ',
                  subtitle: 'I use this technology in my work ',

                  description: (
                    <div className='skills-cards'>
                      <div className='card'>HTML/CSS</div>
                      <div className='card'>JAVASCRIPT</div>
                      <div className='card'>REACT JS</div>
                      <div className='card'>NODE JS</div>
                    </div>
                  ),

                  img: '/9.png',
                },
                show: true,
              })
            }}
          >
            <h1>Skills </h1>
          </div>
        </div>
        <div className='items'>
          <div
            className='list_title'
            onClick={() => {
              dispatch({
                type: 'project',
                project: {
                  title: 'My Projects  ',
                  subtitle: "i made some project I'll show You Bellow ",

                  description: (
                    <div className='skills-cards'>
                      <div className='card'>
                        <a href='/test' target='_blank'>
                          {' '}
                          Quiz App
                        </a>
                      </div>
                      <div className='card'>
                        {' '}
                        <a href='/test' target='_blank'>
                          {' '}
                          STORE
                        </a>
                      </div>
                      <div className='card'>
                        {' '}
                        <a href='/test' target='_blank'>
                          {' '}
                          PORTFOLIO
                        </a>
                      </div>
                    </div>
                  ),
                  img: '/project.png',
                },
                show: true,
              })
            }}
          >
            <h1>Project</h1>
          </div>
        </div>
        <div className='items'>
          <div
            className='list_title'
            onClick={() => {
              dispatch({
                type: 'hireme',
                hireme: {
                  title: 'Hire Me  ',
                  subtitle: 'Contact Me  ',

                  description: (
                    <div className='skills-cards'>
                      <div className='card'>
                        {' '}
                        <a
                          href='https://mail.google.com/mail/?view=cm&fs=1&to=sabricharim7@gmail.com'
                          target='_blank'
                          className='social'
                        >
                          <BiLogoGmail /> <span>gmail</span>
                        </a>
                      </div>
                      <div className='card'>
                        {' '}
                        <a
                          href='https://github.com/sabricharime'
                          target='_blank'
                          className='social'
                        >
                          <BiLogoGithub /> <span>github</span>
                        </a>
                      </div>
                    </div>
                  ),
                  img: '/6.png',
                },
                show: true,
              })
            }}
          >
            <h1>Hire Me </h1>
          </div>
        </div>
      </div>

      {show && <Content type={data} />}
    </div>
  )
}

export default App
