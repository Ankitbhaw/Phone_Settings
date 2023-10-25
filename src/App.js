import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./Settings";
import Display from "./Display/Display";
import Sound from "./Sound/Sound";
import Connections from "./Connections/Connections";
import AboutPhone from "./About_Phone/AboutPhone";
import "./App.css"
import DetailedInfoAndSpecs from "./About_Phone/Detailed_Info_Specs/DetailedInfoAndSpecs";
import Status from "./About_Phone/Detailed_Info_Specs/Status/Status";
import Model from "./About_Phone/Detailed_Info_Specs/Status/Model/Model";
import BackUp from "./About_Phone/BackUpAndRestore/BackUp";
import FactoryReset from "./About_Phone/Factory_reset/FactoryReset";
import { ScheduleDarkMode } from "./Display/Schedule_dark_mode/ScheduleDarkMode";
import { BrightnessLevel } from "./Display/Brightness_level/BrightnessLevel";
import { ReadingMode } from "./Display/Reading_mode/ReadingMode";
import { VR } from "./Display/Device_Vr/VR";
import SoundAssistant from "./Sound/Sound_Assistant/SoundAssistant";
import AdditionalSettings from "./Sound/Additional_Settings/AdditionalSettings";
import SoundEffects from "./Sound/Sound_Effects/SoundEffects";
import Cast from "./Connections/Cast/Cast";
import Printing from "./Connections/Printing/Printing";
import VPN from "./Connections/VPN/VPN";
import WirelessDisplay from "./Connections/Wireless_display/WirelessDisplay";
import Reset from "./Connections/Reset/Reset";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Settings/>} /> 
        <Route exact path="/display" element={<Display/>} /> 
        <Route exact path="/display/device_vr" element={<VR/>} /> 
        <Route exact path="/display/reading_mode" element={<ReadingMode/>} />
        <Route exact path="/display/schedule_dark_mode" element={<ScheduleDarkMode/>} /> 
        <Route exact path="/display/brightness_level" element={<BrightnessLevel/>} /> 
        <Route exact path="/connections" element={<Connections/>} /> 
        <Route exact path="/connections/cast" element={<Cast/>} /> 
        <Route exact path="/connections/printing" element={<Printing/>} />
        <Route exact path="/connections/vpn" element={<VPN/>} />
        <Route exact path="/connections/reset" element={<Reset/>} />
        <Route exact path="/connections/wireless_display" element={<WirelessDisplay/>} />
        <Route exact path="/sound" element={<Sound/>} /> 
        <Route exact path="/sound/sound_assistant" element={<SoundAssistant/>} /> 
        <Route exact path="/sound/additional_settings" element={<AdditionalSettings/>} /> 
        <Route exact path="/sound/sound_effects" element={<SoundEffects/>} /> 
        <Route exact path="/about_phone" element={<AboutPhone/>} /> 
        <Route exact path="/about_phone/backup_restore" element={<BackUp/>} /> 
        <Route exact path="/about_phone/factory_reset" element={<FactoryReset/>} /> 
        <Route exact path="/about_phone/detailed_info_specs" element={<DetailedInfoAndSpecs/>} /> 
        <Route exact path="/about_phone/detailed_info_specs/status" element={<Status/>} /> 
        <Route exact path="/about_phone/detailed_info_specs/status/model" element={<Model/>} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;