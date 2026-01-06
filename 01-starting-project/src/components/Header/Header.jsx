import './Header.css';
import reactImg from '../../assets/react-core-concepts.png';

const reactDesc = ['Fundmental', 'Crucial', 'Core'];

function genRandomNum(max) {
  return Math.floor(Math.random() * (max+1));
}

export default function Header(){
  const description = reactDesc[genRandomNum(2)]; // array: 0, 1, 2
  return (
      <header>
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}