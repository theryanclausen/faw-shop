import React from "react";
import "./App.css";
import {
  AppBar,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import { FavoriteBorder, Search, ShoppingCart } from "@mui/icons-material";
import ImageGallery from "react-image-gallery";

function App() {
  return (
    <div
      style={{
        width: "95%",
        margin: "10px auto",
        padding: "10px",
        marginTop: "100px",
      }}
    >
      <AppBar>
        <Grid
          style={{ padding: "5px 15px" }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>網上購物商店</Typography>

          <TextField
            size="small"
            style={{ flex: 0.5 }}
            placeholder="搜索欄"
            InputProps={{ endAdornment: <Search fontSize="small" /> }}
          ></TextField>
          <IconButton>
            <ShoppingCart />
          </IconButton>
        </Grid>
        <Grid
          container
          style={{ zIndex: 5, backgroundColor: "darkblue", padding: "0 10px" }}
          alignItems="center"
        >
          <Button>致命毒药</Button>
          <Button>枪 剑 和 刀</Button>
          <Button>可收藏的交易卡</Button>
          <Button>箭鱼长号</Button>
        </Grid>
      </AppBar>
      <Grid container spacing={1} justifyContent="space-between">
        <Grid xs={7}>
          <ImageGallery
            useBrowserFullscreen={false}
            showFullscreenButton={false}
            showIndex={false}
            showNav={false}
            thumbnailPosition="left"
            infinite={false}
            showPlayButton={false}
            items={[
              {
                thumbnailWidth: "50px",
                originalWidth: "400px",
                original: "/umbrellaopen.jpg",
                thumbnail: "/umbrellaopen.jpg",
              },
              {
                thumbnailWidth: "50px",
                originalWidth: "400px",
                original: "/umbrellaclosed.jpg",
                thumbnail: "/umbrellaclosed.jpg",
              },
            ]}
          />
        </Grid>
        <Grid xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h3">毒镖射击伞</Typography>
              <Typography>(Dart Gun Umbrella)</Typography>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                ₺324.97
              </Typography>
              <List>
                <ListItem>Range: 50m</ListItem>
                <ListItem>射程: 50 米</ListItem>
                <ListItem>防水的</ListItem>
                <ListItem>全天候准备</ListItem>
              </List>
              <Chip
                onClick={() => {}}
                className="chip"
                color="primary"
                icon={<ShoppingCart />}
                label="立即购买"
              ></Chip>
              <Chip
                onClick={() => {}}
                className="chip"
                color="warning"
                icon={<FavoriteBorder />}
                label="愿望清单"
              ></Chip>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography>
        經有的，基小投法產人果目務相望：認不眾望術消座生民歡門同活如國！文強價所統、中具作想她自精，落高環還書之出收唱步動現又類軍質，片布他兒過。我那沒行身表也之，傳真影理子了新一間收高來傳實下少對日世寫言民年；活快定多去要證？讓步電。
        家當知家聲：請人的我遊頭根石軍進此等心，不國公言原做油土後院由聯痛民速球生細？必費空戲來面任地一功書商。想門步是趣甚星角總李……能綠該是？似臺商在充景到指食：布樣黨有，稱要電國事，的改訴數如量，人的不這全醫座布，極期她中德國基太從給件，供兩靈到入們到個房我些要漸專人可沒動國？人時金多一他輪簡關見邊前前代寶完靜這一益流天他過死一石算後我管以學，意想房看媽那時景外子上華草公十打的由人家大術子的給時是投式一名製家到景落來成解久，一一他展養不出倒然舉型。打失然來後結大每頭成相了再上也西力臺研時意位片親、面上著了聽音們兒知個道來風益風型保李之五題裡先營後下人外？
      </Typography>
    </div>
  );
}

export default App;
//
