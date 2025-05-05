import './Employees.css';
const PersonCard = ({name,title,salary,phone,email,animal,startDate,location,department,skills,...rest}) =>{
 
    // const calculateExperience = () =>{
    //     const fromDate = new Date(startDate);
    //     const toDate = new Date();
    //     let years = toDate.getFullYear() - fromDate.getFullYear();
    //     let months = toDate.getMonth() - fromDate.getMonth();
    //     if (months < 0){
    //         years--;
    //         months += 12;
    //     }
 
    //     return{
    //         years,
    //         months
    //     }
 
    // }
 
    // const {years, months} = calculateExperience(); // Destructure years and months from the return object

    const calculateExperience = () => {
        const start = new Date(startDate);
        const now = new Date();
    
        const totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
    
        return { years, months };
      };
    
      const { years, months } = calculateExperience();

 
      const reminder =
      ([5, 10, 15].includes(years) && months === 0)
        ? '🎉 Schedule recognition meeting.'
        : (years === 0 && months < 6)
          ? '🔔 Schedule probation review.'
          : '';
 
    // const addAnimalEmoji = (animal) =>{
    
    //     const animalEmojis = [
    //     { name: 'Rabbit' , emoji: '🐇'},
    //     { name: 'Tiger' , emoji: '🐅'},
    //     { name: 'Dog', emoji: '🐕'},
    //     { name: 'Cow', emoji: '🐄'},
    //     { name: 'Cat' , emoji:'🐈'},
    //     { name: 'Llama', emoji: '🐈'},
    //     { name: 'Goat', emoji: '🐐'},
    //     { name: 'Fox', emoji: '🦊'},
    //     { name: 'Panda', emoji: '🐼'},
    //     { name: 'Polar Bear', emoji: '🐻‍❄️'},
    //     { name: 'Seal', emoji: '🦭'}
    // ]
 
    // const filterEmoji = animalEmojis.find(a => a.name.toLowerCase() === animal.toLowerCase());
    // return filterEmoji ? filterEmoji.emoji : ' ';
 
    // }

    const addAnimalEmoji = (animalName) => {
        const emojiMap = {
          rabbit: '🐇',
          tiger: '🐅',
          dog: '🐕',
          cat: '🐈',
          fox: '🦊',
          panda: '🐼',
          'polar bear': '🐻‍❄️',
          seal: '🦭',
          owl: '🦉',
          Lion: '🦁',
          bear: '🐻',
          
        };
        return emojiMap[animalName.toLowerCase()] || '';
      };
 
    return(
       
        <div className="card">
            <h3>{name}  {addAnimalEmoji(animal)}</h3>
            {/* <p><strong></strong> {name}</p> */}
            <p>{title}</p>
            <p>{salary} €</p>
            <p>{phone}</p>
            <p>{email}</p>
            {/* <p><strong></strong>  {addAnimalEmoji(animal)}</p> */}
            <p>{location}</p>
            <p>{department}</p>
            <p>{skills}</p>
            <p>{years} Years and {months} Months</p>
            <strong><p style={{ color: "rgb(171, 16, 16)" }}>{reminder}</p></strong>
                  
        </div>
      
    )
}
 
export default PersonCard;