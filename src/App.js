import React from "react";
import {
  Container,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import QRCode from "qrcode";

function App() {
  const [URL, setURL] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const generateQRCode = () => {
    QRCode.toDataURL(URL, (err, url) => {
      if (err) {
        console.log(err);
        return;
      }
      setImageUrl(url);
    });
  };
  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "qrcode.png";
    link.click();
  };
  return (
    <Container>
      <Card>
        <h2>QR Code Generator</h2>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4} md={6} sm={8}>
              <TextField
                label="URL"
                value={URL}
                onChange={(e) => setURL(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} lg={4} md={6} sm={8}>
              <Button
                variant="contained"
                color="primary"
                onClick={generateQRCode}
              >
                Generate QR Code
              </Button>
            </Grid>
            {imageUrl && (
              <Grid item xs={12} lg={4} md={6} sm={8}>
                <img src={imageUrl} alt="qr-code" />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={downloadQRCode}
                >
                  Download QR Code
                </Button>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
