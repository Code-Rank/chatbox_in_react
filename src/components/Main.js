

const Main = () => {
    return (<>

        <div style={{ overflowY: "scroll", height: '310px', width: "725px" }} className=" card ">
            <div class="d-flex flex-row-reverse">

                <div class="p-2 w-75 " style={{background:"#E8F1F3",borderRadius:"20px",padding:"5px"}}>
                    itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitem
                </div>
            </div>
            <div class="d-flex flex-row  my-2" >
                <div class="p-2 w-75" style={{background:"#EFEFEF",borderRadius:"20px",padding:"5px"}}>Flex itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitem </div>

            </div>
        </div>
        <div>
            <div className="row">
                <div className="col-8">
                    <input type="text" className="form-control w-100" placeholder="Text write here " />
                </div>
                <div className="col-4" style={{ marginLeft: "-2%" }}>
                    <input type="button" className="btn btn-primary " value="Send " />
                </div>
            </div>
        </div>
    </>);
}

export default Main;