import { CloudUpload } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"


const DropzoneImage = ({ onChange, image }) => {
    
    return (
        <div>
            <label htmlFor="fileInput" className="p-8 border-2 border-gray-300 border-dashed rounded-lg" style={{ fontSize: "1.2rem", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: '8px' }}>
                <Box margin="auto">
                    <CloudUpload fontSize="large" style={{ margin: "auto" }} />
                    <Typography>Drop your files here, or <span className="browse">browse</span></Typography>
                    <Typography className="text-[15px] text-gray-600">PNG, JPG and GIF files are allowed</Typography>
                </Box>
                <input
                    id="fileInput"
                    multiple
                    type="file"
                    className="file-input"
                    accept=".png, .jpg, .gif"
                    style={{ display: "none" }}
                    aria-label="Upload files"
                    onChange={onChange}
                />
            </label>
            {image &&
                <img src={image} alt="preview" className="w-60" style={{ borderRadius: '8px', marginTop: '8px' }} />
            }
        </div>
    )
}


export default DropzoneImage