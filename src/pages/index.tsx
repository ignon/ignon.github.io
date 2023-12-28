import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {
  Card,
  Section,
  Quote,
  Layout,
  Contact,
  Link,
  Subheading,
  Tags,
  EmploymentCertificate
} from '../components/CvComponents'


const IndexPage = () => {
  return (
    <main>
      <Layout>
        <div className='flex flex-col justify-between mt-7 mb-5'>
          <h1 className='flex text-5xl sm:text-4xl font-weight-600 mb-0 text-gray-550 overflow-hidden'>Arttu Mäkinen</h1>
          <Quote>
            <Contact lines='+358451146892 | arttu.b.makinen@student.jyu.fi' textStyles='text-gray-600'/>
            <Link text='LinkedIn' url='https://www.linkedin.com/in/arttu-m%C3%A4kinen-567b75150'/>
          </Quote>
        </div>
        <p className='mb-5' />
        <Section title='ABOUT ME'>
          <Card title='Fullstack Developer'>
            I can turn an idea into a finished product through UI/UX design,
            frontend and backend development.
          </Card>
          <Card title='Game Developer'>
            <Subheading text='Since 2013'/>
            I've been a game dev hobbyist since lower secondary.
          </Card>
          <Card title='Coding Teacher'>
            <Subheading text='Since 2018'/>
            I'm passionate about teaching coding and game development
            to elementary school kids.
          </Card>
        </Section>

        <Section title='EXPERIENCE'>
          <Card title='Nokia' titleUrl='https://nokia.com'>
            <Subheading text='Jun 2023 – Aug 2023 | Software Developer Trainee'/>
            Software development at Nokia Digital Automation Cloud
            <Quote>
              "Arttu has performed his duties with excellent working skills and excellent behaviour. Arttu has strong software development background and he was implementing new features to the automation platform very quickly, also refactoring existing software code base extremely professionally."
              <br/> => <Link text='employment certificate' url='https://drive.google.com/file/d/1OdM3KAHauqAikynoM_psd3tPKsvpWo5j/view?usp=sharing' />
            </Quote>
            <Tags tags='Node.js, Docker, Docker Compose, Linux backend' />
          </Card>
          <Card title='Nodeon' titleUrl='https://nodeon.com'>

            <Subheading text='Jun 2022 – Dec 2022 | Software Designer Trainee'/>
            Backend development, programmed and deployed an internal analytics service.
            <Quote>
              "During the internship, Arttu demonstrated ability to quickly learn new technologies and apply them in software development."
              <br/> => <Link text='employment certificate' url='https://drive.google.com/file/d/17Ho6tLXC6Q-6zToNr4NwtFlRcyIbRi-G/view?usp=sharing' />
            </Quote>

            <Tags tags='C#, .NET, Azure App Service, Entity Framework Core, SQL Server' />
          </Card>
          <Card title='Jyväskylän Normaalikoulu' titleUrl='https://www.norssi.jyu.fi/'>
            {/* <EmploymentCertificate url='https://drive.google.com/file/d/1iE1R9C8ek1pvReBzZwJ9yUUNwzkaeTM5/view?usp=sharing' /> */}
            <Subheading text='Aug 2022 – June 2023 | non-military-service'/>
            Taugh first-graders as a teacher assistant, held 75 coding lessons and developed free coding learning materials for primary schools.
            Updated / redesigned the school website (Plone CMS)

            {/* <Quote> */}
            {/* "Arttu executed all the agreed-upon tasks with a high level of quality, responsibility and diligence. He quicky adapted to the work team and had a really good work ethic." */}
            {/*   <br/> <Link url='https://drive.google.com/file/d/1iE1R9C8ek1pvReBzZwJ9yUUNwzkaeTM5/view?usp=share_link' text='employment certificate' /> */}
            {/* </Quote> */}
          </Card>
          <Card title='Kodarit' titleUrl='https://kodarit.com/fi/'>
            <EmploymentCertificate url='https://drive.google.com/file/d/1NcyLzXtSzgOmPaEAF5tntL83dSCMHMQJ/view' />
            <Subheading text='Jun 2018 – Jan 2021 | Coding Teacher '/>
            Taught elementary school children to code and develop video games.
            Held 320 coding lessons, consisting of weekly lessons, summer camps
            and event workshops. Developed learning materials for other teachers
            and made an interactive learning environment for teaching programming
            concepts. Expanded business operations to Jyväskylä and recruited
            two new employees.
          </Card>
          <Card title='Valmet' titleUrl='https://www.valmet.com/'>
            <Subheading text='Jun 2016, 2 weeks | Summer trainee'/>
            "Excel macros (had to fix Visual Basic spaghetti code of self taught
            engineers...), updating software for worksite laptops."
            <Quote>
              Arttu performed the assigned tasks conscientiously and with a hardworking attitude. His initiative and work skills were commendable.
              <br /> => <Link text='employment certificate' url='https://drive.google.com/file/d/1e7t0UAXmOHWbVpH7Hr2nZ5-HOYcii_X4/view?usp=sharing' />
            </Quote>
          </Card>
        </Section>
        <Section title='EDUCATION'>
          <Card title='University of Jyväskylä'>
            <Subheading text='2019 – | Information Technology'/>
          </Card>
          <Card title='Fullstack Open MOOC, 22 ECTS'>
            <Subheading text='2021 | Helsinki University MOOC'/>
            <EmploymentCertificate text='certificate' url='https://drive.google.com/file/d/1UGmD-MmGU9vSxfY6e7Bl8eBcEknSL4Ct/view?usp=sharing' />
            Almost a Finnish minor study (25 ECTS) worth of Fullstack studies.
            <Tags tags='Node.js, React (Native), Redux, TypeScript, Express, GraphQL, MongoDB/Apollo, Jest, Cypress' />
          </Card>
          <Card title='Tampereen yhteiskoulun lukio'>
            <Subheading text='2015 – 2018 | Ylioppilastutkinto'/>
            <Link text='päättötodistus' url='https://drive.google.com/file/d/1dcNWQ-jc6nWdyjEjQ0CSaAfFFtbdRHxg/view?usp=sharing' />
            {', '}
            <Link text='yo-todistus' url='https://drive.google.com/file/d/1dc9vsx4R6X_aCUVfZz_t5BrJZRx7CyWU/view?usp=sharing' />
          </Card>
        </Section>
        <Section title='MAIN PROJECTS'>
          <Card title='Cosmos.md'>
            <EmploymentCertificate text='Source code' url='https://github.com/ignon/cosmos.md'/>
            <Subheading text='2022 | Node, React, Apollo-Express, GraphQL, MongoDB' />
              Cloud-based wiki / hypertext note editor with both front-
              and backend implementation. Developed with zero external assistance.
              Final assigment for Fullstack Open course.

              (The deployment is currently down because Heroku closed their free
              tier and I haven't had time to migrate to another service)

              <Quote>
                A useful and well implemented app! The UI is user-friendly
                and there were no usability-impairing bugs or large usability problems.
                The code is sensibly organized in all respects and quite good quality.
                <br/> => <Link text='the assigment review' url='https://github.com/ignon/cosmos.md/issues/1' /> by the course teacher
              </Quote>
          </Card>
          <Card title='Koodimatskut.fi' titleUrl='https://koodimatskut.fi'>
              <EmploymentCertificate text='Source code' url='https://github.com/ignon/koodimatskut'/>
              <Subheading text='2023 | Typescript, React, Gatsby.js, Tailwind' />
                A carefully curated and arrenged list of high-quality coding learning
                materials for primary schools (in Finnish).

                Powered by Gatsby.js, a static site generator which allows for querying
                local markdown files with GraphQL, then passing them as props to React
                components.
            </Card>
            <Card title='Loops' titleUrl='https://ignon.github.io/loops/'>
              <Subheading text='2019 | Javascript, HTML, p5.js'/>
              <EmploymentCertificate text='Source code' url='https://github.com/ignon/loops'/>
              An interactive environment for teaching while- and for loops in Javascript. Coded before university, source code isn't beautiful.
            </Card>
            <Card title='Notechad++' titleUrl='https://github.com/ignon/notechad'>
              <Subheading text='2019 | Ohjelmointi 1, C#' />
              A command-line note management tool with regex parsing. Made with test driven development.
            </Card>
        </Section>
        <Section title='SKILLS'>
          <Card title='JavaScript'>
            <p className='mb-3'>
            Unit-testing (Jest), E2E-testing (Cypress),
            continous integration and deployment (Github Actions), writing REST API:s (Express)
            and GraphQL API:s (Apollo).
            </p>

            <p className='mb-3'>
            I have a skill of designing simple, yet pleasant user interfaces
            (React, Tailwind) and making them interactive with state-management (Redux, custom hooks etc).
            </p>

            {/* <p className='mb-3'> I have an interest in data visualization and HTML5-canvas game development (d3.js, p5.js, Pixi.js) </p> */}

            <Tags tags='Node.js, React (Native), Redux, TypeScript, Express, GraphQL, MongoDB/Apollo, Jest, Cypress, GatsbyJS, Tailwind CSS' />
          </Card>
          <Card title='.NET / C#'>
            <Tags tags='C#, .NET, Azure App Service, Azure Virtual Networks, Azure Key Vault, Entity Framework Core, SQL Server, Akka.NET' />
          </Card>
          <Card title='DevOps and Development Tools'>
            <Tags tags='Git, GitHub Actions, CI/CD, Docker, Docker Compose' />
          </Card>
          <Card title='Linux'>
            I use Linux, Neovim, SSH, Tmux, i3wm and Vimium on daily basis because they boost my productivity by providing a faster way to get things done, navigate code projects, file systems and internet.
            <Tags tags='Linux, Vim/Neovim, SSH, Tmux, i3wm, Shell/Bash' />
          </Card>
          <Card title='Other'>
            <Tags tags='Swagger / OpenAPI, Regex, FTP, HTML, CSS, Java, Netlify, Posthog' />
          </Card>
        </Section>
        <Section title='CONTACT'>
          <Card>
            <Contact lines='Arttu Mäkinen | Jyväskylä, Finland | arttu.b.makinen@student.jyu.fi | 0451146892' />
            <Link text='LinkedIn' url='https://www.linkedin.com/in/arttu-m%C3%A4kinen-567b75150' />
          </Card>
        </Section>
        <Section title='REFEREES'>
          <Card>
            <Contact lines='Jari Uusinoka | Head of Network Services | Nokia Digital Automation Cloud | 0405137768' />
            <Link text='LinkedIn' url='https://www.linkedin.com/in/jari-uusinoka-11982a7/' />
          </Card>
          {/* <Card> */}
          {/*   <Contact lines='Lari Väänänen | Planning Manager | Nodeon | 0505750773' /> */}
          {/*   <Link text='LinkedIn' url='https://www.linkedin.com/in/lari-v%C3%A4%C3%A4n%C3%A4nen-4670b981' /> */}
          {/* </Card> */}
        </Section>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Arttu Mäkinen</title>
  </>
)
