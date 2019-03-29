import React, {Component} from 'react';

export const DataContext = React.createContext();

export default class DataProvider extends Component {

  state = {
    me: 'STEVEN CHUNG',
    about: {
      blurb: `I’m Steve, a Full Stack Software Engineer and I have a passion for problem solving all things computer related.  I build well polished, pixel-perfect, robust full-stack applications using the latest industry technologies primarily with the MERN stack.  After years of hands-on computer hardware experience, I transitioned into software engineering and have been loving it ever since.  I am a self-taught, motivated individual with technical skills that span over more than a decade.`
    },
    contact: {
      github: 'https://www.github.com/stevenchung213',
      gmail: 'mailto:stevenchung.213@gmail.com',
      linkedin: 'https://www.linkedin.com/in/stevenchung-213',
      resume: 'https://s3-us-west-1.amazonaws.com/my.portfolio/my_resume.pdf'
    },
    profileImg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/profile.png',
    projects: {
      sucasa: {
        name: 'Su Casa',
        subtitle: 'Rental & Lodging App',
        caption: 'Lead Full Stack Software Engineer - Rental & Lodging Application',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/sucasa-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/sucasa.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | AWS EBS | AWS S3 | Jest | Enzyme',
        description: 'Designed user interface with user experience in mind, focusing on delivering a clean and seamless' +
          ' layout*Manipulated the DOM via JavaScript to enhance user experience with custom CSS animations *Optimized webpack' +
          ' configuration to handle code splitting, minification, css extraction and compression for ideal front end load times' +
          ' *Utilized a cloud service document-oriented database, keeping in mind the potential requirement of horizontal scalability' +
          ' *Deployed onto AWS ECS cloud container service for quick and easy management including scalability *Configured a central' +
          ' proxy to conjoin the team\'s modules from each member\'s cloud environments *Led regular inclusive stand up meetings to' +
          ' track progress and discuss issues while using tools such as Trello to monitor the team\'s progression *Applied Agile' +
          ' methodologies to maintain consistent and sustainable workflow without delay *Enforced code reviews on all pull requests before merging into the main branch on the organization\'s repository to ensure best practices and readability',
        href: 'https://github.com/stevenchung213/overview-proxy/tree/DEMO_LOCALHOST'
      },
      zillwoah: {
        name: 'Zillwoah!',
        subtitle: 'Real Estate App',
        caption: 'Back End Software Engineer - Real Estate Application',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/zillwoah-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/zillwoah.png',
        tech: 'React | Node | Express | PostgreSQL | CassandraDB | AWS EC2 | Nginx | K6 | New Relic | Loader.io',
        description: 'Redesigned the legacy database schema to use decimal data types for more precise mortgage calculations *' +
          'Created a custom script which randomly generated a csv file with 10 million mock mortgage records for testing purposes*' +
          'Utilized a csv import method to efficiently inject those 10 million records into the database in under ten minutes *' +
          'Reduced database select query times to less than half a millisecond by indexing the table *' +
          'Deployed onto AWS EC2 cloud-computing platform for quick scalability in case of computational load changes' + '*Horizontally' +
          ' scaled across four t2.micro instances using NGiNX load balancing to handle up to 15,000 requests/second for large scale' +
          ' network traffic testing *Adhered to Agile methodologies using GitHub\'s version control system to submit pull requests and administer peer to peer code reviews',
        href: 'https://github.com/SDC-8/steve'
      },
      mymappins: {
        name: 'My Map Pins',
        subtitle: 'App using Google Maps API',
        caption: 'Full Stack Software Engineer - Save your own labeled marker on Google Maps',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mappins-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mappins.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | Google Maps API',
        description: 'Designed front end with Bootstrap for a clean user interface with simplicity in mind*' + 'Rendered maps utilizing' +
          ' the google-maps-react library in conjunction with the Google Maps API*Added functionality for user to attach a note to' +
          ' specified geographical Markers *' + "Programmed functionality for users to attach or edit a note via tooltip at a user specific geographical marker *Formulated and applied proper logic for users to employ create, read, update and delete operations on notes stored within a document-oriented database",
        href: 'https://github.com/stevenchung213/mvp'
      },
      repofetcher: {
        name: 'Github Repo Fetcher',
        subtitle: 'App using Github API',
        caption: 'Full Stack Software Engineer - Retrieve all repos of a Github user',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/repofetcher-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/repofetcher.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | GitHub API',
        description: 'Developed the front end with Bootstrap for a clean and simple user interface*' +
          'Composed functionality for a user to search a GitHub handle\'s repositories and sort by popularity*' +
          'Architected the back end to store all user searched repositories within a document-oriented database allowing the display of the overall top 25 most popular repos',
        href: 'https://github.com/stevenchung213/hrr34-fullstack-review'
      },
      portfolio: {
        name: 'Personal Site',
        subtitle: 'My Portfolio Site',
        caption: 'Front End Software Engineer - Portfolio',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/portfolio-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/portfolio.png',
        tech: 'React | Node | Express | Material Design Bootstrap | Responsive Design | AWS S3 | Github Pages',
        description: 'Front end bootstrapped using Material Design' +
          ' for' +
          ' React *Front end optimizations: code splitting, gzip compression, css extraction, image compression and caching *Webpack' +
          ' configuration:' +
          ' TerserMinification |' +
          ' OptimizeCSSAssets | Chunk Splitting | ImageMinification | MiniCSSExtract | Compression | HTMLWebpack | HTMLWebpackTemplate |' +
          ' WebpackPWAManifest |' +
          ' WorkboxServiceWorker' +
          ' *' +
          'Deployed using Github Pages with conditional React rendering *Service worker implemented for offline availability (currently' +
          ' disabled since Github Pages deployment does not support service' +
          ' workers) *All image files hosted by S3 with caching enabled *Designed for Chrome',
        href: 'https://github.com/stevenchung213/stevenchung213.github.io'
      }
    },
    technologies: {
      front: [
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/javascript.png',
          tooltip: `JavaScript ES5 | ES6`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/html5.png',
          tooltip: `HTML5`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/css3.png',
          tooltip: `CSS3 | CSS Modules`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/react.png',
          tooltip: `React`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/redux.png',
          tooltip: `Redux`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/bootstrap.png',
          tooltip: `Bootstrap 4`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/jquery.png',
          tooltip: `jQuery`
        }
      ],
      back: [
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/node.png',
          tooltip: `Node.js`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/express.png',
          tooltip: `Express.js`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mongo.png',
          tooltip: `MongoDB`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mongoose.png',
          tooltip: `Mongoose`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/postgresql.png',
          tooltip: `PostgreSQL`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mysql.png',
          tooltip: `MySQL`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/cassandra.png',
          tooltip: `Apache Cassandra`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/restful.png',
          tooltip: `RESTful Architecture`
        }
      ],
      dev: [
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/aws.png',
          tooltip: `AWS ECS | EBS | S3`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/jest.png',
          tooltip: `Jest`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/enzyme.png',
          tooltip: `Enzyme`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mocha.png',
          tooltip: `Mocha`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/chai.png',
          tooltip: `Chai`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/git.png',
          tooltip: `Git`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/github.png',
          tooltip: `GitHub`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/npm.png',
          tooltip: `npm`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/webpack.png',
          tooltip: `webpack`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/babel.png',
          tooltip: `Babel`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/windows.png',
          tooltip: `Windows`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/linux.png',
          tooltip: `Linux`
        },
        {
          url: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mac.png',
          tooltip: `macOS`
        }]
    }
  };

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}