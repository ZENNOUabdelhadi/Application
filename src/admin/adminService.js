import axios from 'axios';

export const add = data => {
    console.log('data',data) ;
    axios.post(`http://localhost:5000/add`,{data})
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
};
