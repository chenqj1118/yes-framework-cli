import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { GridRowWrap } from 'yes-intf';
import { ListText, VisibleEqual, VisibleNotEqual } from 'yes-framework';
import IconFont from '../font';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        margin: 15,
        backgroundColor: '#add8e6',
        padding: 15,
    },
    content: {
        flexDirection: 'column',
        flex: 1,
        flexBasis: 'auto',
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionbutton: {
        width: 40,
        textAlign: 'right',
    },
    text: {
        paddingTop: 4,
        color: 'rgb(0,0,0,0.6)',
        fontSize: 11,
    },
});
class CalendarRow extends PureComponent {
    static contextTypes = {
        getBillForm: PropTypes.func,
        getOwner: PropTypes.func,
        onControlClick: PropTypes.func,
    }
    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.rowIndex);
        }
    }
    removeRow = () => {
        this.props.remove && this.props.remove();
    }
    checkRow = async ()=> {
        const grid = this.context.getOwner();
        const billform = this.context.getBillForm();
        if(!grid || !billform) {
            return;
        }
        await grid.unselectAll();
        await grid.toggleSelect(this.props.rowIndex);
        this.context.onControlClick('Submit');
    }
    uncheckRow = async ()=> {
        const grid = this.context.getOwner();
        const billform = this.context.getBillForm();
        if(!grid || !billform) {
            return;
        }
        await grid.unselectAll();
        await grid.toggleSelect(this.props.rowIndex);
        this.context.onControlClick('CancelSubmit');
    }
    render() {
        const { editable, checked } = this.props;
        return (
            <View style={[styles.container]}>
                <TouchableOpacity onPress={this.onClick} style={[styles.content]}>
                    <View style={[styles.content]}>
                        <VisibleNotEqual yigoid="WorkNature" targetValue="3">
                            <ListText yigoid="Workdescription" />
                        </VisibleNotEqual>
                        <VisibleNotEqual yigoid="WorkNature" targetValue="3">
                            <ListText yigoid="Project" />
                        </VisibleNotEqual>
                        <VisibleEqual yigoid="WorkNature" targetValue="3">
                            <ListText style={styles.text} yigoid="WorkNature" />
                        </VisibleEqual>
                        <ListText style={styles.text} yigoid="confirmStatus" />
                    </View>
                </TouchableOpacity>
                <View style={[styles.action]}>
                    {
                        editable ? <IconFont onPress={this.removeRow} size={22} name="icon-icon_roundclose" /> : null
                    }
                    {
                        <VisibleEqual yigoid="confirmStatus" targetValue="0">
                            <IconFont onPress={this.checkRow} size={22} name="icon-submit" style={[styles.actionbutton]}/>
                        </VisibleEqual>
                    }
                    {
                        <VisibleEqual yigoid="confirmStatus" targetValue="1">
                            <IconFont onPress={this.uncheckRow} size={22} name="icon-Canceltherelease" style={[styles.actionbutton]}/>
                        </VisibleEqual>
                    }
                </View>
            </View>
        )
    }
}

export default GridRowWrap(CalendarRow);
