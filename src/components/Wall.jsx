const Wall = () => {

    const messages = [
        {
            _id:1,
            content:'tatakae',
            firm:'Eren Jaeger',
            font:'bellefair'
        },
        {
            _id:2,
            content:'tatakae laksjdlk asjdl kasjdlka sjdlkasjdl kjaslkd asdasdasd asdasdasd asdasdasd asdasd',
            firm:'Levi Ackerman',
            font:'sans-serif'
        },
        {
            _id:3,
            content:'tatakae laksjdlkasjdlkasj dlkasjdlkasjdlkjaslkd asdasdasd asdasdasd asdasdasd asdasd',
            firm:'Levi Ackerman',
            font:'sans-serif'
        },
        {
            _id:4,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'digital-7'
        },
        {
            _id:5,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bauhaus'
        },
        {
            _id:6,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bauhaus'
        },
        {
            _id:7,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'cascadia-code'
        },
        {
            _id:8,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'ghosts'
        },
        {
            _id:9,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'awesome'
        },
        {
            _id:10,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bank-gothic'
        },
        {
            _id:11,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'basileus'
        },
        {
            _id:12,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bradley-hand'
        },
        {
            _id:13,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'brush-script'
        },
        {
            _id:14,
            content:'harlow',
            firm:'MIkasa Ackerman',
            font:'harlow-solid'
        },
        {
            _id:15,
            content:'harlow',
            firm:'MIkasa Ackerman',
            font:'kapital-kanji'
        },
        {
            _id:16,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'kartoons'
        },
        {
            _id:17,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'linkin-font'
        },
        {
            _id:18,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'ocr'
        },
        {
            _id:19,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'old-english'
        },
        {
            _id:20,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'pixel'
        },
        {
            _id:21,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'daft-font'
        },
        {
            _id:22,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'digital-7'
        },
        {
            _id:23,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bauhaus'
        },
        {
            _id:24,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bauhaus'
        },
        {
            _id:25,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'cascadia-code'
        },
        {
            _id:26,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'ghosts'
        },
        {
            _id:27,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'awesome'
        },
        {
            _id:28,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bank-gothic'
        },
        {
            _id:29,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'basileus'
        },
        {
            _id:30,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bradley-hand'
        },
        {
            _id:31,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'brush-script'
        },
        {
            _id:32,
            content:'harlow',
            firm:'MIkasa Ackerman',
            font:'harlow-solid'
        },
        {
            _id:33,
            content:'harlow',
            firm:'MIkasa Ackerman',
            font:'kapital-kanji'
        },
        {
            _id:34,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'kartoons'
        },
        {
            _id:35,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'linkin-font'
        },
        {
            _id:36,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'ocr'
        },
        {
            _id:37,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'old-english'
        },
        {
            _id:38,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'pixel'
        },
        {
            _id:39,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'daft-font'
        },
        {
            _id:40,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'digital-7'
        },
        {
            _id:41,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bauhaus'
        },
        {
            _id:42,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bauhaus'
        },
        {
            _id:43,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'cascadia-code'
        },
        {
            _id:44,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'ghosts'
        },
        {
            _id:45,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'awesome'
        },
        {
            _id:46,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bank-gothic'
        },
        {
            _id:47,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'basileus'
        },
        {
            _id:48,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'bradley-hand'
        },
        {
            _id:49,
            content:'tatakaeasdasdasd',
            firm:'MIkasa Ackerman',
            font:'brush-script'
        },
        {
            _id:50,
            content:'harlow',
            firm:'MIkasa Ackerman',
            font:'harlow-solid'
        },
        {
            _id:51,
            content:'harlow',
            firm:'MIkasa Ackerman',
            font:'kapital-kanji'
        },
        {
            _id:52,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'kartoons'
        },
        {
            _id:53,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'linkin-font'
        },
        {
            _id:54,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'ocr'
        },
        {
            _id:55,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'old-english'
        },
        {
            _id:56,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'pixel'
        },
        {
            _id:57,
            content:'Putos',
            firm:'MIkasa Ackerman',
            font:'daft-font'
        },
    ]

  return (
    <section className="wall pt-12 sm:pt-20 p-4 sm:p-8 flex flex-wrap content-start gap-3 sm:gap-5">
        {
            messages.map(m=><div key={m._id} className={`${m.font}-font max-w h-fit p-2 font-medium italic flex flex-col`}>
                <p className="text-2xl" >{m.content}</p>
                <p className="text-sm self-end" >-{m.firm}</p>
            </div>)
        }
    </section>
  )
}

export {Wall}