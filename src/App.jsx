
// import './App.css'

// function App() {
//   return (
//     <div className="app">
//       <header className="header">
//         <h2>Zhanm</h2>

//         <nav>
//           <a href="#home">Басты бет</a>
//           <a href="#abai">Абай сөзі</a>
//           <a href="#finance">Қаржылық сауат</a>
//           <a href="#income">Онлайн табыс</a>
//         </nav>
//       </header>

//       <main id="home" className="hero-section">
//         <div className="hero-text">
//           <p className="small-text">Абайдың даналығы • Қаржылық сауат</p>

//           <h1>
//             Ақылды ой.
//             <br />
//             Дұрыс қаржы.
//             <br />
//             Жаңа мүмкіндік.
//           </h1>

//           <p className="description">
//             Абай атамыздың терең ойларын негізге ала отырып,
//             қаржылық сауаттылықты арттыруға және онлайн мүмкіндіктерді
//             дұрыс түсінуге бірге қадам жасайық.
//           </p>

//           <button>Бастауды үйрену</button>
//         </div>
//       </main>

//       <section id="abai" className="section">
//         <h2>Абайдың сөзі</h2>
//         <p>
//           «Ақыл, қайрат, жүректі бірдей ұста...»
//         </p>
//       </section>

//       <section id="finance" className="section">
//         <h2>Қаржылық сауаттылық</h2>
//         <p>
//           Ақшаны дұрыс басқару — болашақты жоспарлаудың маңызды бөлігі.
//         </p>
//       </section>

//       <section id="income" className="section">
//         <h2>Онлайн табыс</h2>
//         <p>
//           Қазіргі заманда интернет арқылы жаңа мүмкіндіктерді үйренуге болады.
//         </p>
//       </section>
//     </div>
//   )
// }

// export default App





import './App.css'
import abaiImg from './assets/abai.jpeg'
function App() {
  return (
    <div className="app">

      {/* Жоғарғы мәзір */}
      <header className="header">
        <h2>Zhanm</h2>

        <nav>
          <a href="#home">Басты бет</a>
          <a href="#abai">Абай сөзі</a>
          <a href="#finance">Қаржылық сауат</a>
          <a href="#income">Онлайн табыс</a>
        </nav>
      </header>


      {/* Басты бөлім */}
      <main id="home" className="hero-section">
        <div className="hero-text">

          <p className="small-text">
            Абайдың даналығы • Қаржылық сауат
          </p>

          <h1>
            Ақылды ой.
            <br />
            Дұрыс қаржы.
            <br />
            Жаңа мүмкіндік.
          </h1>

          <p className="description">
            Абай атамыздың терең ойларын негізге ала отырып,
            қаржылық сауаттылықты арттыруға және онлайн мүмкіндіктерді
            дұрыс түсінуге бірге қадам жасайық.
          </p>

          {/* WhatsApp батырмасы */}
          <a
            href="https://chat.whatsapp.com/Ds1DwadijZD0lMzngKBMiI?s=hd&p=i&mlu=0&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Тегін WhatsApp тобына қосылу
          </a>

        </div>
      </main>


      {/* Абай бөлімі */}
      <section id="abai" className="section">
        <h2>Абайдың сөзі</h2>

        <p>
          «Ғылым таппай мақтанба, орын таппай баптанба...»
        </p>

        <p>
          Абайдың даналығы — бүгінгі өмірде де өз маңызын жоғалтпайды.
          Білімге, еңбекке және саналы әрекетке ұмтылу әр адамның
          болашағын қалыптастыруға көмектеседі.
        </p>
      </section>


      {/* Қаржылық сауат бөлімі */}
      <section id="finance" className="section">
        <h2>Қаржылық сауаттылық</h2>

        <p>
          Ақшаны дұрыс басқару — қаржылық еркіндікке бастайтын
          маңызды қадам.
        </p>

        <div className="cards">

          <div className="card">
            <h3>💰 Ақшаны басқару</h3>
            <p>
              Кіріс пен шығысты бақылауды үйрену.
            </p>
          </div>

          <div className="card">
            <h3>📊 Жоспарлау</h3>
            <p>
              Қаржылық мақсат қойып, оған жүйелі түрде жету.
            </p>
          </div>

          <div className="card">
            <h3>🎯 Мақсат</h3>
            <p>
              Болашаққа нақты қаржылық жоспар қалыптастыру.
            </p>
          </div>

        </div>
      </section>


      {/* Онлайн табыс бөлімі */}
      <section id="income" className="section">

        <h2>Онлайн мүмкіндік</h2>

        <p>
          Қазіргі заманда интернет арқылы жаңа білім алып,
          жаңа мүмкіндіктерді зерттеуге болады.
        </p>

        <a
          href="https://chat.whatsapp.com/Ds1DwadijZD0lMzngKBMiI?s=hd&p=i&mlu=0&ilr=4"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Тегін сабаққа қосылу
        </a>

      </section>


      {/* Төменгі бөлік */}
      <footer className="footer">
        <p>
          © 2026 Zhanm. Білім • Қаржылық сауат • Мүмкіндік
        </p>
      </footer>

    </div>
  )
}

export default App

