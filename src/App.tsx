import React, {useContext, useState} from 'react'
import {Context} from 'hook-ui-kit'



const App = () => {
    const { showModal, pushTransaction, wallet, changeTheme, logout, changeRPC } = useContext<any>(Context);
    const [isLoading, setIsLoading] = useState(false);

    const transact = async () => {
        setIsLoading(true)
        pushTransaction([{
            account: 'eosio.token',
            name: 'transfer',
            data: {
                from: wallet,
                to: 'eosio',
                quantity: '0.00000001 WAX',
                memo: '',
            }
        }]).then((resp:any) => console.log(resp)).catch((e:any) => console.log(e)).finally(() => setIsLoading(false))
    }
    return(
        <div style={{color: '#FFF'}}>
            {!wallet ? 
            <>
                <button onClick={() => showModal()}>show modal</button>
                <button onClick={() => changeTheme('dark')}>changeTheme</button>
                <button onClick={() => changeRPC('testnet')}>testnet</button>
                <button onClick={() => changeRPC('mainnet')}>mainnet</button>
                
            </> 
            : 
            <>
                <p>{wallet}</p>
                <button onClick={() => logout()}>Logout</button>
                <button onClick={() => transact()}>Push</button>
                {isLoading && <span>Loading...</span>}
            </>
            }
            
        </div>
    )
}
export default App