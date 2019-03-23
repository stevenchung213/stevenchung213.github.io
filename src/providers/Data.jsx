import React, {Component} from 'react';

export const DataContext = React.createContext();

export default class DataProvider extends Component {

  state = {
    me: 'STEVEN CHUNG',
    about: {
      blurb: `I’m Steve, a Full Stack Software Engineer, and I have a passion for problem solving all things computer related.  I build polished, pixel-perfect full-stack applications using the latest industry technologies.  After years of hands-on computer hardware experience, I transitioned into software engineering and have been loving it ever since.  I am a self-taught, motivated individual with technical skills that span over more than a decade.`
    },
    contact: {
      github: 'https://www.github.com/stevenchung213',
      gmail: 'mailto:stevenchung.213@gmail.com',
      linkedin: 'https://www.linkedin.com/in/stevenchung-213',
      resume: 'https://s3-us-west-1.amazonaws.com/my.portfolio/steven_chung_resume.pdf'
    },
    profileImg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/profile.png',
    projects: {
      sucasa: {
        name: 'Su Casa',
        subtitle: 'Rental & Lodging App',
        caption: 'Rental & Lodging Application',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/sucasa-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/sucasa.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | AWS EBS | AWS S3 | Jest | Enzyme',
        description: 'Constructed a clean UI/UX experience while focusing on modularity via React *Optimized page load speeds from 3' +
          ' seconds to less than 1 second using image resizing/compression and minifying *Developed using Agile methodologies and tested' +
          ' with Jest/Enzyme *Deployed application using AWS Elastic Beanstalk, AWS S3 and Mongo Cloud Atlas',
        href: 'https://github.com/stevenchung213/overview-proxy/tree/DEMO_LOCALHOST'
      },
      zillwoah: {
        name: 'Zillwoah!',
        subtitle: 'Real Estate App',
        caption: 'Real Estate Application',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/zillwoah-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/zillwoah.png',
        tech: 'React | Node | Express | PostgreSQL | CassandraDB | AWS EC2 | Nginx | K6 | New Relic | Loader.io',
        description: 'Efficiently scaled legacy codebase to handle 10 million records *' +
          'Created a seed script which randomly generated and populated PostgreSQL with 10 million records in less than 10 minutes;' +
          ' Cassandra in less than 20 minutes *' +
          'Reduced database query times to less than 0.5ms through indexing on Postgresql; less than 1ms on Cassandra *' +
          'Stress-tested and horizontally scaled micro-service to 4 servers using NGINX load balancer to handle 15,000 requests/second *' +
          'Deployed application using multiple AWS EC2 T2.micro instances',
        href: 'https://github.com/SDC-8/steve'
      },
      mymappins: {
        name: 'My Map Pins',
        subtitle: 'App using Google Maps API',
        caption: 'Save your own labeled marker on Google Maps',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mappins-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mappins.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | Google Maps API',
        description: 'MVP application designed with Bootstrap in the front end *' + 'Rendered maps utilizing the Google-Maps-React library' +
          ' along with Google Maps API *Added functionality for user to attach a note to specified geographical Markers *' + "Saved" +
          " user's personalized note along with assigned coordinates using MongoDB",
        href: 'https://github.com/stevenchung213/mvp'
      },
      repofetcher: {
        name: 'Github Repo Fetcher',
        subtitle: 'App using Github API',
        caption: 'Retrieve all repos of a Github user',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/repofetcher-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/repofetcher.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | GitHub API',
        description: 'Designed a clean interface for users to search for and display a Github user\'s repos *' +
          'Saves all user\'s repos to MongoDB *' +
          'Lists top 25 repo\'s sorted by fork count when not searching for specific user',
        href: 'https://github.com/stevenchung213/hrr34-fullstack-review'
      },
      portfolio: {
        name: 'Personal Site',
        subtitle: 'My Portfolio Site',
        caption: 'Portfolio',
        imgSm: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/portfolio-small.png',
        imgLg: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/portfolio.png',
        tech: 'React | Node | Express | Material Design Bootstrap | Responsive Design | AWS S3 | Github Pages',
        description: 'Front end bootstrapped using Material Design' +
          ' for' +
          ' React *Webpack gzip compression, image compression and caching enabled for optimal loading speeds *' +
          'Deployed using Github Pages with conditional React rendering *Service worker implemented for offline availability (currently' +
          ' disabled since Github Pages deployment does not support service' +
          ' workers) *All image files hosted by S3 with caching enabled * Designed for Chrome',
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
