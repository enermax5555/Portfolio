
export default function oldContactForm() {
    const inputform = [
        {
            pText: 'Enter your name:',
            type: 'text',
            name: 'user_name',
            placeholder: 'Name',
            rows: 0
        },
        {
            pText: 'Enter your email:',
            type: 'email',
            name: 'user_email',
            placeholder: 'Email',
            rows: 0
        },
        {
            pText: 'Enter your message',
            type:'text',
            name:'message',
            placeholder:'Message',
            rows: 4
        },
    ]
    const InputForms = inputform.map((e) => {
        return(
            <div>
                <p className='text-white pb-1 cursor-default select-none font-sofia'>{e.pText}</p>
                <input type={e.type} name={e.name} placeholder={e.placeholder} rows={e.rows} cols='20' className='border-solid border-gray-600 rounded-lg p-2 w-80' />
            </div>
        )
    })
    return(
        <main>
        {InputForms}
        </main>
    )
};