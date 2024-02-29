import { BuderState } from "../state";
import { BuderWidget } from "./widget";
export type BuderClassType = string | string[] | BuderState<string[]>;
export declare enum BuderThemeType {
    input = 0,
    button = 1,
    label = 2,
    container = 3,
    form = 4,
    select = 5,
    textarea = 6,
    checkbox = 7,
    radio = 8,
    header = 9,
    footer = 10,
    section = 11,
    article = 12,
    nav = 13,
    aside = 14,
    main = 15,
    figure = 16,
    figcaption = 17,
    table = 18,
    caption = 19,
    tbody = 20,
    thead = 21,
    tfoot = 22,
    tr = 23,
    th = 24,
    td = 25,
    video = 26,
    audio = 27,
    iframe = 28,
    canvas = 29,
    svg = 30,
    math = 31,
    p = 32,
    h1 = 33,
    h2 = 34,
    h3 = 35,
    h4 = 36,
    h5 = 37,
    h6 = 38,
    ul = 39,
    ol = 40,
    li = 41,
    dl = 42,
    dt = 43,
    dd = 44,
    a = 45,
    em = 46,
    strong = 47,
    small = 48,
    s = 49,
    cite = 50,
    q = 51,
    dfn = 52,
    abbr = 53,
    time = 54,
    code = 55,
    var = 56,
    samp = 57,
    kbd = 58,
    sub = 59,
    sup = 60,
    i = 61,
    b = 62,
    u = 63,
    mark = 64,
    ruby = 65,
    rt = 66,
    rp = 67,
    bdi = 68,
    bdo = 69,
    span = 70,
    br = 71,
    wbr = 72,
    ins = 73,
    del = 74,
    address = 75,
    fieldset = 76,
    text = 77,
    password = 78,
    datetime = 79,
    datetimeLocal = 80,
    date = 81,
    month = 82,
    week = 83,
    number = 84,
    email = 85,
    submit = 86,
    reset = 87,
    primaryButton = 88,
    secondaryButton = 89,
    successButton = 90,
    dangerButton = 91,
    warningButton = 92,
    infoButton = 93,
    lightButton = 94,
    darkButton = 95,
    linkButton = 96,
    blockButton = 97,
    largeButton = 98,
    smallButton = 99,
    outlineButton = 100,
    disabledButton = 101,
    activeButton = 102,
    dropdownButton = 103,
    splitButton = 104,
    toggleButton = 105,
    checkboxButton = 106,
    radioButton = 107,
    listitem = 108,
    list = 109,
    link = 110,
    image = 111
}
export declare function Theme(theme: Record<BuderThemeType, BuderClassType> | any, widget: BuderWidget): void;