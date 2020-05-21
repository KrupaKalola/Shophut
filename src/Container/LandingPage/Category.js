import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import { Add, StarBorder, Remove, FiberManualRecord } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 280,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #f1f1f1',
        borderRadius: '20px',
        marginTop: '20px'
    },
    nested: {
        pRemoveingLeft: theme.spacing(4),
    },
    list: {
        border: '1px solid #f1f1f1',
        borderRadius: '20px',
    },
    subheader: {
        border: "1px solid #f1f1f1",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        backgroundColor: "#3ba66b",
        color: '#fff',
        fontSize: "20px"
    }


}));


function Category() {
    const classes = useStyles();
    const [openVeg, setOpenVeg] = useState(false);
    const [openFruit, setOpenFruit] = useState(false);


    const handleClickVeg = () => {
        setOpenVeg(!openVeg);
    };
    const handleClickFruit = () => {
        setOpenFruit(!openFruit);
    };
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            disablePadding="true"
            className={classes.root}
        >
            <ListSubheader component="div" className={classes.subheader} variant="heading" id="nested-list-subheader">
                Categories
            </ListSubheader>
            <ListItem button onClick={handleClickVeg}>
                <ListItemText primary="Vegitables" />
                {openVeg ? <Remove /> : <Add />}
            </ListItem>
            <Collapse in={openVeg} timeout="auto" unmountOnExit>
                <List component="div" disablePRemoveing dense="true">
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Tomato" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Brocoli" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Cabbage" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Cucumber" />
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={handleClickFruit}>
                <ListItemText primary="Fruits" />
                {openFruit ? <Remove /> : <Add />}
            </ListItem>
            <Collapse in={openFruit} timeout="auto" unmountOnExit>
                <List component="div" disablePRemoveing dense="true">
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Orange" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Apple" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Banana" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Strawberry" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FiberManualRecord style={{ fontSize: '15px' }} />
                        </ListItemIcon>
                        <ListItemText primary="Peaches" />
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button>
                <ListItemText primary="Juices" />
            </ListItem>


            <ListItem button>
                <ListItemText primary="Tea and Coffee" />
            </ListItem>

            <ListItem button>
                <ListItemText primary="Jam" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Sea Food" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Fresh Meat" />
            </ListItem>
        </List>
    )
}

export default Category
