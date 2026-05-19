import styled from "styled-components";

const Wrapper = styled.section`
    background:var(--coffee-20);
    min-height:80vh;
    .top{
        text-align:center;
        padding:1rem;
    }
    .one,.two,.three{
        margin-top:2rem;
        margin-left:1rem;
        margin-right:1rem;
        padding:1rem;
        border-top:3px solid blue;
        border-radius:4px;
    }
    .one{
        background:var(--blue-30);
        
    }
    .two{
        background:var(--green-40);  
    }
    .three{
        background:var(--blue-30);
    }
	.dashboard {
        margin-top:3rem;
		display:grid;
		 grid-template-columns:1fr; 
		/* grid-template-columns: auto 1fr; */
	}
    
	
     @media (min-width:992px){
		.dashboard {
			display:grid;
			grid-template-columns:1fr 1fr 1fr;
			
			
		} 
        
    } 
    .running{
        background:white;
        color:green;
        padding:2px;
        border-radius:5px;
        font-weight:700;
    }
    .on{
        margin-bottom:0.5rem;
    }
    .off-1{
        background:white;
        color:red;
        padding:4px;
        border-radius:3px;
        font-weight:700;
    }
	.dashboard-page{
		background:#fff;
		padding:0.75rem;
		margin:0 auto;
		min-height:calc(100vh - 6rem);
		/* max-width:fit-content; */
		
	}
	
`
export default Wrapper