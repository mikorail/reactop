import React, {Component} from 'react';
import './App.css';
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import HotelCard from "./HotelCard";
import SampleMap from './SampleMap';

class App extends Component {

    state = {
        open: false,
        hotels: [
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskripsi: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskripsi: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskripsi: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskripsi: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'}
        ]
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div className="row">
                <div className="col m12">
                    <PrimarySearchAppBar/>
                    <br/>
                    <SampleMap/>
                    <br/>
                    <div className="row">
                        <div className="col-md-5">
                        {this.state.hotels.map((data, key) => {
                                return (
                                    <div>
                                        <HotelCard key={key} title={data.nama} tanggal={data.tanggal} deskripsi={data.deskripsi}/>
                                        <br/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
