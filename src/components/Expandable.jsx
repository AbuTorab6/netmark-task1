import React,{Fragment,useState} from 'react';

const Expandable = () => 
{

    const data = [
        {
            question:"question 1",
            answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scr"
        },
        {
            question:"question 2",
            answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scr"
        },

        {
            question:"question 3",
            answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scr"
        },
        {
            question:"question 4",
            answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scr"
        }
    ]


    const[selected,setSelected]=useState(null)

    var toggle = (i)=>
    {
        if(selected==i)
        {
           return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <Fragment>
            <div className='wrapper'>
                <div className='accordion'>
                    {
                        data.map(
                            (item,i)=>
                            {
                                return(
                                    <div className='item'>
                                        <div className='title' onClick={()=>toggle(i)}>
                                            <h2>{item.question}</h2>
                                            <span className='icon'>{selected==i ? '-':'+'}</span>
                                        </div>
                                        <div className={selected==i ? 'content show':'content'}>{item.answer}</div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Expandable;